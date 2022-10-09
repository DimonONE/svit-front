import React, { SetStateAction, WheelEvent } from "react";

interface IProps {
  event: WheelEvent<HTMLDivElement> | undefined;
  loading: boolean;
  setLoading: React.Dispatch<SetStateAction<boolean>>;
  delay?: number;
}

interface ReturnType {
  nevEvent: WheelEvent<HTMLDivElement> | undefined;
}

export const wheelTimeoutHook = ({
  event,
  loading,
  setLoading,
  delay = 500,
}: IProps): ReturnType => {
  const stopLoading = () => {
    setTimeout(() => {
      setLoading(() => false);
    }, delay);
  };

  const nevEvent = () => {
    if (loading) {
      return undefined;
    }
    setLoading(() => true);
    stopLoading();
    return event;
  };

  return {
    nevEvent: nevEvent(),
  };
};
