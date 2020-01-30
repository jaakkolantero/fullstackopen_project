export const aboutOptions = (about, cms) => {
  return {
    id: about.fileRelativePath, // needs to be unique
    label: "About",

    // starting values for the about object
    initialValues: {
      fileRelativePath: about.fileRelativePath,
      title: about.title,
      content: about.content,
    },

    // field definition
    fields: [
      {
        name: "title",
        label: "Title",
        component: "text",
      },
      {
        name: "content",
        label: "Content",
        component: "textarea",
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
