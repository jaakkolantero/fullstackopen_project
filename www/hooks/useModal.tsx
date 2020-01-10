import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

const useModal = name => {
  const [visibility, setVisibility] = useState(false);
  const open = () => setVisibility(true);
  const close = () => setVisibility(false);
  const router = useRouter();
  useEffect(() => {
    if (visibility) {
      router.push(`/?modal=${name}`, undefined, { shallow: true });
    } else {
      router.push("/", undefined, { shallow: true });
    }
  }, [visibility]);

  return {
    open,
    close,
  };
};

export default useModal;
