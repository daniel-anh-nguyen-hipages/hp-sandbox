import { useState } from "react";
import { getLeads, getProfileInfo, acceptLead } from "../server/api";

const LeadList = () => {
  const [leads, setLeads] = useState([]);
  const [profile, setProfile] = useState({});

  const fetchData = async () => {
    const profile = await getProfileInfo();
    setProfile(profile);

    const leads = await getLeads();
    setLeads(leads);
  };

  fetchData();

  return (
    <div>
      <h2>Welcome {profile.businessName}</h2>
      <br />
      <br />
      {leads.length &&
        leads.map((lead) => (
          <p className="lead-card">
            <h1>{lead.title}</h1>
            <p>{lead.description}</p>
            <p>
              <strong>Start By:</strong> {lead.startBy}
            </p>
            <p>
              <strong>Contact:</strong> {lead.mobile}
            </p>
            <p>
              <strong>User:</strong> {`${lead.firstName} ${lead.lastName}`}
            </p>
            {lead.state !== "accepted" && (
              <div>
                <button
                  onClick={async () => {
                    if (profile.permissions.updateLeads) {
                      await acceptLead(lead.leadId);
                      fetchData();
                    }
                  }}
                >
                  Accept
                </button>
                <button>Reject</button>
              </div>
            )}
          </p>
        ))}
    </div>
  );
};

export const App = () => {
  return (
    <div className="App">
      <h2 className="text-2xl">Hipages leads</h2>
      <LeadList />
    </div>
  );
}
