const initialState = [
	{
		id: "1",
		header: "Applicability",
		data: [
			{
				id: 1,
				text: "This guideline is applicable to all staff within TM Group."
			},
			{
				id: 2,
				text:
					"This guideline covers all business related international traveling by employees and applies to meetings, attending conferences/seminars, incentives to agents, meeting customers, consortium obligations, supporting roles for overseas regional offices etc"
			}
		]
	},
	{
		id: "2",
		header: "Oversea Travel Requirement",
		data: [
			{
				id: 1,
				text:
					"The Head of Division/Subsidiary/LOB is required to exercise due care in planning overseas visits. Only those trips that are planned for in advance and pertinent to the achievement of the company’s targets and objectives should be considered"
			},
			{
				id: 2,
				text:
					"Where possible, the number of candidates should be controlled to a bare minimum and each unit should adopt the most cost efficient method for example for business purposes, one member could represent on behalf of others in the team or for training, ‘train-the-trainers’ concept is introduced"
			},
			{
				id: 3,
				text:
					"All trips should be planned ahead to allow for sufficient time to facilitate the approval process. All applications for overseas travel should be submitted for approval to the respective approver at least 2 weeks (14 days) prior to the intended date of travel to enable traveling arrangements to be made where applicable"
			},
			{
				id: 4,
				text:
					"In cases where TM is accompanying Government representatives on trips sponsored by TM, it should be noted that approval from the Ministry of Finance (MOF) must be procured by the respective Government representatives, before participating in the trips which could benefit their respective Ministries"
			},
			{
				id: 5,
				text:
					"In principle, to maintain good business practices, any travel related sponsorship by Suppliers/Business Partners is strictly not allowed. However, exception shall be given to the situation where the travel is part and parcel of a requirement spelt out in an existing contractual obligation between a supplier and TM. Under this circumstance, TM representatives are still required to adhere to this Overseas Travel Guideline, Provision 12.2 of TM Code of Business Ethics 2016 and Chapter 7 of TM Anti-Corruption Guide 2014, as well as to obtain the Group Chief Procurement Officer’s approval. It is advisable to include in the justification paper whether the trip is fully or partially sponsored, the estimated cost to be incurred by the vendor or both parties (if any) and the basis/justification for the sponsorship. As staff’s time is also cost to the company, Para 2.2 above is also applicable to sponsored trips"
			},
			{
				id: 6,
				text:
					"For any training conducted overseas, the requestor is required to submit the Overseas Training Form (refer Appendix 3) together with Justification Paper via the respective Human Capital Business Driver (HC BD), upon nomination from the respective Head of Division/LOB for GHCM recommendation"
			}
		]
	},
	{
		id: "3",
		header: "Approval",
		data: [
			{
				id: 1,
				text:
					"All applications must be prepared by the nominated representative. The justification paper should contain the representative details, venue & objectives, expected deliverables, estimated cost and the benefits to TM"
			},
			{
				id: 2,
				text:
					"All applications must disclose the YTD cumulative cost that has been incurred by the nominated representative and the department/division"
			}
		]
	},
	{
		id: "4",
		header: "Monitoring of Travel",
		data: [
			{
				id: 1,
				text:
					"Head of Finance is required to manage and report to the respective Head of LOB/Division/Subsidiary on the overseas traveling expenses incurred for the month"
			},
			{
				id: 2,
				text:
					"All nominated representatives (except GM and above) are responsible to deliver the outcome/purpose of the trip as detailed out in the justification paper to their respective Head of Finance within 60 days after their return. The report should be endorsed by their original nominator/justifier and should include (1) An account of activities undertaken, (2) An assessment of the value of the trip against previous justification report, (3) A plan for using/sharing the skills and knowledge gained, (4) Recommendations and/or action plans arising from the trip. For GMs and above, you are expected to share the knowledge and experience gained from the trip to the relevant parties which may include your subordinates & peers and where relevant translate its applicability into improvement action plans"
			},
			{
				id: 2,
				text:
					"Where re-imbursement for traveling is allowed, it is the responsibility of the business unit to ensure that the necessary billings have been made and monies are recovered"
			}
		]
	}
];

export default (state = initialState, action) => {
	switch (action.type) {
		default:
			return state;
	}
};
