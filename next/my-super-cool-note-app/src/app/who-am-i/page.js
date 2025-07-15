import TeacherClientPage from "./clientPage";
import WhoAmI from "./whoAmI";

export default async function WhoAmIPage(params) {
  return (
    <TeacherClientPage id={1}>
      <WhoAmI />
    </TeacherClientPage>
  );
}
