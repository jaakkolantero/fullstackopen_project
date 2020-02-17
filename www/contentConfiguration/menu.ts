import { v4 } from "uuid";
import { MenuCMS } from "../pages";
import { TinaCMS } from "tinacms";

export const menuOptions = (menu: MenuCMS, cms: TinaCMS) => {
  return {
    id: menu.fileRelativePath, // needs to be unique
    label: "Menu",

    // starting values for the menu object
    initialValues: {
      fileRelativePath: menu.fileRelativePath,
      title: menu.title,
      menuItems: menu.menuItems,
    },

    // field definition
    fields: [
      {
        name: "title",
        label: "Menu Title",
        component: "text",
      },
      {
        label: "Menu Items",
        name: "menuItems",
        component: "group-list",
        description: "List of menu items",
        itemProps: item => ({
          key: item.id,
          label: item.name,
        }),
        defaultItem: () => ({
          name: "New Item",
          price: "0",
          id: v4(),
        }),
        fields: [
          {
            label: "Name",
            name: "name",
            component: "text",
          },
          {
            label: "Price",
            name: "price",
            component: "text",
          },
          {
            label: "Ingredients",
            name: "ingredients",
            component: "group-list",
            description: "Ingredients",
            itemProps: item => ({
              key: item.id,
              label: item.name,
            }),
            defaultItem: () => ({
              name: "New ingredient",
              id: v4(),
            }),
            fields: [
              {
                label: "Name",
                name: "name",
                component: "text",
              },
            ],
          },
        ],
      },
    ],

    // save & commit the file when the "save" button is pressed
    onSubmit(data) {
      return cms.api.git.writeToDisk({
        fileRelativePath: data.fileRelativePath,
        content: JSON.stringify(data),
      });
      // commit feature disabled for now.
      // .then(() => {
      //   return cms.api.git.commit({
      //     files: [data.fileRelativePath],
      //     message: `Commit from Tina: Update ${data.fileRelativePath}`,
      //   });
      // });
    },
  };
};
