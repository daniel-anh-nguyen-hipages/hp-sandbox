const database = {
  leads: [
    {
      leadId: 1,
      firstName: "John",
      lastName: "Doe",
      title: "Garden tap install",
      description: "Install a new garden tap in my backyard",
      startBy: "Next week",
      mobile: "0444448848",
    },
    {
      leadId: 2,
      firstName: "Jane",
      lastName: "Smith",
      title: "Repair kitchen tap",
      description: "There is a small leak in the kitchen tap",
      startBy: "Urgent",
      mobile: "0434747744",
    },
    {
      leadId: 3,
      firstName: "Mike",
      lastName: "Johnson",
      title: "Hot water system stopped working",
      description: "My gas hot water unit seems to have broken",
      startBy: "Next couple of days",
      mobile: "0456723435",
    },
    {
      leadId: 4,
      firstName: "Sara",
      lastName: "Brown",
      title: "Paint the living room",
      description: "Looking for someone to paint my living room walls",
      startBy: "Next month",
      mobile: "0499887766",
      state: "accpeted",
    },
    {
      leadId: 5,
      firstName: "David",
      lastName: "Wilson",
      title: "Fix leaking roof",
      description: "Roof is leaking during heavy rain, need urgent repair",
      startBy: "Immediately",
      mobile: "0422331122",
    },
    {
      leadId: 6,
      firstName: "Emily",
      lastName: "Green",
      title: "Replace bathroom faucet",
      description: "Need to replace the faucet in the bathroom",
      startBy: "Within two weeks",
      mobile: "0411223344",
    },
    {
      leadId: 7,
      firstName: "Chris",
      lastName: "Anderson",
      title: "Unclog toilet",
      description: "Toilet is clogged and needs to be unclogged",
      startBy: "Today",
      mobile: "0465656565",
    },
    {
      leadId: 8,
      firstName: "Olivia",
      lastName: "Martinez",
      title: "Install new showerhead",
      description: "Want to upgrade the showerhead in the bathroom",
      startBy: "Next weekend",
      mobile: "0487878787",
    },
    {
      leadId: 9,
      firstName: "Daniel",
      lastName: "Brown",
      title: "Repair burst pipe",
      description: "There is a burst pipe in the basement that needs fixing",
      startBy: "Immediately",
      mobile: "0479797979",
    },
    {
      leadId: 10,
      firstName: "Sophia",
      lastName: "Jones",
      title: "Install water filter",
      description: "Need a water filter installed in the kitchen",
      startBy: "Next month",
      mobile: "0404040404",
    },
    {
      leadId: 11,
      firstName: "William",
      lastName: "White",
      title: "Fix dripping faucet",
      description: "Faucet in the utility room is constantly dripping",
      startBy: "Within a week",
      mobile: "0499999999",
    },
    {
      leadId: 12,
      firstName: "Mia",
      lastName: "Taylor",
      title: "Replace sewer line",
      description: "Sewer line in the backyard needs replacement",
      startBy: "Urgent",
      mobile: "0433333333",
      state: "rejected",
    },
    {
      leadId: 13,
      firstName: "Matthew",
      lastName: "Johnson",
      title: "Install new toilet",
      description: "Replace the old toilet with a new one",
      startBy: "Next week",
      mobile: "0424242424",
    },
    {
      leadId: 14,
      firstName: "Ava",
      lastName: "Davis",
      title: "Fix shower temperature",
      description: "Shower water temperature is inconsistent",
      startBy: "Within two days",
      mobile: "0474747474",
    },
    {
      leadId: 15,
      firstName: "Liam",
      lastName: "Brown",
      title: "Install sump pump",
      description: "Need a sump pump installed in the basement",
      startBy: "Next weekend",
      mobile: "0464646464",
      state: "accepted",
    },
  ],
};

export const getLeads = async () => {
  await new Promise((r) => setTimeout(r, 500));
  return database.leads;
};

export const acceptLead = async (id) => {
  await new Promise((r) => setTimeout(r, 1500));
  database.leads = database.leads.map((i) => {
    if (i.leadId === id) {
      return {
        ...i,
        state: "accepted",
      };
    }
    return i;
  });
  console.log(database);
};

export const getProfileInfo = async () => {
  await new Promise((r) => setTimeout(r, 1200));
  return {
    businessName: "Atlantis Plumbing Group",
    userName: "admin",
    permissions: {
      viewLeads: true,
      updateLeads: true,
    },
  };
};
