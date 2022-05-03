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
          <div className="empty">
            <h3>Aun no tienes ninguna candidatura</h3>
            <div className="empty-image">
              <img src="/assets/empty-blue.png" alt="empty" />
            </div>

          </div>
        )}
      </ul>
    </div>
  );
};

export default CandidaturesPage;
