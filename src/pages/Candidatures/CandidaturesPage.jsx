import Candidature from "../../components/Candidature/Candidature";
import UserNavbar from "../../shared/components/UserNavbar/UserNavbar";
import { useProfileContext } from "../../shared/contexts/ProfileContext";

const CandidaturesPage = () => {
  const { userProfile } = useProfileContext();
  return (
    <div>
      <UserNavbar />
      <ul>
        {userProfile.candidatures.length ? (
          userProfile.candidatures.map((candidature) => {
            return (
              <Candidature key={candidature.id} candidature={candidature} />
            );
          })
        ) : (
          <h1>Aun no tienes ninguna candidatura</h1>
        )}
      </ul>
    </div>
  );
};

export default CandidaturesPage;
