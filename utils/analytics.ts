import ReactGA from "react-ga";
const googleAnalyticsId = process.env.REACT_APP_GOOGLE_ANALYTICS_ID ?? "";

export const initGA = () => {
  ReactGA.initialize(googleAnalyticsId);
};

export const logPageView = () => {
  ReactGA.set({ page: window.location.pathname });
  ReactGA.pageview(window.location.pathname);
};
