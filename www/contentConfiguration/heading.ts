export const headingOptions = (heading, cms) => {
  return {
    id: heading.fileRelativePath, // needs to be unique
    label: "Heading",

    // starting values for the heading object
    initialValues: {
      fileRelativePath: heading.fileRelativePath,
      title: heading.title,
      highlight: heading.highlight,
      content: heading.content,
    },

    // field definition
    fields: [
      {
        name: "title",
        label: "Heading Title",
        component: "text",
      },
      {
        name: "highlight",
        label: "Title Highlight",
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
