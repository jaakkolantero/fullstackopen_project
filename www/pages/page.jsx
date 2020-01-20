import * as React from "react";
import { useCMS, useLocalForm, useWatchFormValues } from "tinacms";
import { menuOptions } from "../contentConfiguration/menu";

export default function Page({ menu }) {
  const cms = useCMS();
  const [menuData, menuState] = useLocalForm(menuOptions(menu, cms));

  const writeToDisk = React.useCallback(formState => {
    cms.api.git.onChange({
      fileRelativePath: formState.fileRelativePath,
      content: JSON.stringify(formState.values),
    });
  }, []);

  useWatchFormValues(menuState, writeToDisk);
  return (
    <>
      <h1>{menuData.title}</h1>
      <ol>
        {menuData.menuItems.map(item => (
          <li key={item.id}>
            <h3>{item.name}</h3>
            <div>{item.price}</div>
            <p>
              {item &&
                item.ingredients &&
                item.ingredients.map(ingredient => ingredient.name).join(" ")}
            </p>
            <hr />
          </li>
        ))}
      </ol>
    </>
  );
}

Page.getInitialProps = function(ctx) {
  let content = require(`../content/menu.json`);
  return {
    menu: {
      ...content,
    },
  };
};
