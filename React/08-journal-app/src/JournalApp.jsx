import { AppRoute } from "./router/AppRoute";
import { AppThemes } from "./theme/AppThemes";

export const JournalApp = () => {
  return (
    <AppThemes>
      <AppRoute />
    </AppThemes>
  );
};
