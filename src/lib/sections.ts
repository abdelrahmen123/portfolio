import {
  languages,
  frontendFrameworks,
  uiLibraries,
  backendFrameworks,
  deploymentPlatforms,
  databasesAndOrm,
  devTools,
} from "./skills";
import { TechnologyIconType } from "./types/iconsTypes";

export const sections: { Items: TechnologyIconType[]; title: string }[] = [
  { Items: languages, title: "اللغات" },
  { Items: frontendFrameworks, title: "تقنيات عمل الواجهة الامامية" },
  { Items: uiLibraries, title: "مكتبات التصميم" },
  { Items: backendFrameworks, title: "أطر عمل الواجهة الخلفية" },
  { Items: databasesAndOrm, title: "قواعد البيانات" },
  { Items: devTools, title: "ادوات التطوير" },
  { Items: deploymentPlatforms, title: "منصات الاستضافة" },
];
