import React, { useReducer } from "react";
import Heading from "../components/Heading";
import Menu from "../components/Menu";
import Cart from "../components/Cart";
import OrderDetails from "../components/OrderDetails";
import { MenuItem } from "../components/Menu/MenuItem";
import { useCMS, useLocalForm, useWatchFormValues } from "tinacms";
import { menuOptions } from "../contentConfiguration/menu";
import { headingOptions } from "../contentConfiguration/heading";
import { get } from "../utils/get";
import withAuthUser from "../utils/pageWrappers/withAuthUser";
import logout from "../utils/auth/logout";
import withAuthUserInfo from "../utils/pageWrappers/withAuthUserInfo";
import Link from "next/link";
import Router from "next/router";

const initialCart = [];

export interface CartItem extends MenuItem {
  amount: number;
}
type CartState = Array<CartItem>;

export type CartAction =
  | { type: "add"; payload: MenuItem }
  | { type: "remove"; payload: { id: string } }
  | { type: "update"; payload: CartItem };

type Query = {
  menuItems: Array<MenuItem>;
};

const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case "add":
      return [...state, { ...action.payload, amount: 1 }];
    case "remove":
      return state.filter(({ id }) => id !== action.payload.id);
    case "update":
      return state.map(item => {
        return item.id !== action.payload.id
          ? item
          : { ...item, ...action.payload };
      });
    default:
      break;
  }
};

interface IndexProps {
  menu: any;
  heading: any;
  data: any;
  AuthUserInfo: any;
  AuthUser: any;
}

const Index = ({ menu, heading, data, AuthUserInfo = null }: IndexProps) => {
  const AuthUser = get(AuthUserInfo, "AuthUser", null);
  const [cart, dispatchCart] = useReducer(cartReducer, initialCart);
  const cms = useCMS();
  const [headingData, headingState] = useLocalForm(
    headingOptions(heading, cms)
  );
  const [menuData, menuState] = useLocalForm(menuOptions(menu, cms));

  const writeToDisk = React.useCallback(formState => {
    cms.api.git.onChange({
      fileRelativePath: formState.fileRelativePath,
      content: JSON.stringify(formState.values),
    });
  }, []);

  useWatchFormValues(menuState, writeToDisk);
  useWatchFormValues(headingState, writeToDisk);

  const handleAddToCart = (menuItem: MenuItem) => {
    const itemInCart = cart.find(({ id }) => id === menuItem.id);
    if (itemInCart) {
      dispatchCart({
        type: "update",
        payload: { ...itemInCart, amount: itemInCart.amount + 1 },
      });
    } else {
      dispatchCart({ type: "add", payload: menuItem });
    }
  };

  const handleAmountChange = (cartItem: CartItem) => {
    dispatchCart({
      type: "update",
      payload: cartItem,
    });
  };
  return (
    <>
      <div>
        {!AuthUser ? (
          <p>
            You are not signed in.{" "}
            <Link href={"/auth"}>
              <a>Sign in</a>
            </Link>
          </p>
        ) : (
          <div>
            <p>You are signed in. Email: {AuthUser.email}</p>
            <p
              style={{
                display: "inlinelock",
                color: "blue",
                textDecoration: "underline",
                cursor: "pointer",
              }}
              onClick={async () => {
                try {
                  await logout();
                  Router.push("/auth");
                } catch (e) {
                  console.error(e);
                }
              }}
            >
              Log out
            </p>
          </div>
        )}
      </div>
      <Heading content={headingData} />
      <Menu
        items={menuData.menuItems}
        title={menuData.title}
        onAddToCart={handleAddToCart}
      />
      <Cart items={cart} onAmountChange={handleAmountChange} />
      <OrderDetails cart={cart} updateCartItem={dispatchCart} />
    </>
  );
};

// Just an example.
const mockFetchData = userId => ({
  user: {
    ...(userId && {
      id: userId,
    }),
  },
  favoriteFood: "pizza",
});

Index.getInitialProps = ctx => {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const menu = require("../content/menu.json");
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const heading = require("../content/heading.json");

  const AuthUserInfo = get(ctx, "myCustomData.AuthUserInfo", null);
  const AuthUser = get(AuthUserInfo, "AuthUser", null);

  const data = mockFetchData(get(AuthUser, "id", null));

  return {
    menu,
    heading,
    data,
  };
};

export default withAuthUser(withAuthUserInfo(Index));
