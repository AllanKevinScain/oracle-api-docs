import { useLocation } from "react-router-dom";
import { DataOfCaracteristicFeatureInterface } from "../../types";
import { ActionLinks } from "./actionLinks";
import { uniqueId } from "lodash";
import { CustomAccordion } from "..";

export const OutletActionApis = () => {
  const location = useLocation();
  const auxState = location?.state as DataOfCaracteristicFeatureInterface[];

  return (
    <CustomAccordion.Accordion>
      {auxState.map((actions) => (
        <ActionLinks
          key={`${actions.displayName}+${uniqueId()}`}
          {...actions}
        />
      ))}
    </CustomAccordion.Accordion>
  );
};
