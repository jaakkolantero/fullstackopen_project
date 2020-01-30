import React from "react";
import { useCMS, useLocalForm, useWatchFormValues } from "tinacms";
import { aboutOptions } from "../contentConfiguration/about";

const About = ({ about }) => {
  const cms = useCMS();
  const [aboutData, aboutState] = useLocalForm(aboutOptions(about, cms));

  const writeToDisk = React.useCallback(formState => {
    cms.api.git.onChange({
      fileRelativePath: formState.fileRelativePath,
      content: JSON.stringify(formState.values),
    });
  }, []);

  useWatchFormValues(aboutState, writeToDisk);

  console.log("aboutData", aboutData);

  return (
    <div className="flex flex-col w-full items-center mt-20">
      <div className="max-w-md">
        <h1 className="text-xl font-bold mb-3">{aboutData.title}</h1>
        <div className="text-gray-800">
          <p>{about.content}</p>
        </div>
      </div>
    </div>
  );
};

About.getInitialProps = function(ctx) {
  let about = require(`../content/about.json`);

  return {
    about,
  };
};

export default About;
