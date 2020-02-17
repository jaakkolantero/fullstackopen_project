import React from "react";
import { useCMS, useLocalForm, useWatchFormValues } from "tinacms";
import { aboutOptions } from "../contentConfiguration/about";
import WithNavigation from "../components/WithNavigation";

interface AboutProps {
  about: {
    fileRelativePath: string;
    title: string;
    content: string;
  };
}

const About = ({ about }: AboutProps) => {
  const cms = useCMS();
  const [aboutData, aboutState] = useLocalForm(aboutOptions(about, cms));

  const writeToDisk = React.useCallback(formState => {
    cms.api.git.onChange({
      fileRelativePath: formState.fileRelativePath,
      content: JSON.stringify(formState.values),
    });
  }, []);

  useWatchFormValues(aboutState, writeToDisk);

  return (
    <>
      <WithNavigation>
        <div className="flex flex-col w-full items-center mt-20">
          <div className="max-w-md">
            <h1 className="text-xl font-bold mb-3">{aboutData.title}</h1>
            <div className="text-gray-800">
              <p>{about.content}</p>
            </div>
          </div>
        </div>
      </WithNavigation>
    </>
  );
};

About.getInitialProps = function(ctx) {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const about = require("../content/about.json");

  return {
    about,
  };
};

export default About;
