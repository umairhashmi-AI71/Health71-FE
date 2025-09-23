export interface Data {
  date: string;
  actor: string;
  step: string;
  action: string;
  fileLocation: string;
}

export const claimWorkflow: Data[][] = [
  // Round 1
  [
    {
      date: "2025-08-16 15:00",
      actor: "Clara",
      step: "Generate Clean Claim Payload",
      action: "Created claim XML for Round 1 submission.",
      fileLocation: "/claims/20250816-L01/claim_v1.xml"
    },
    {
      date: "2025-08-16 15:05",
      actor: "Clara",
      step: "Submit Clean Claim",
      action: "Sent to NoorCare clearinghouse. Claim ID 20250816-L01 assigned.",
      fileLocation: "/claims/20250816-L01/submission_receipt.pdf"
    },
    {
      date: "2025-08-18 10:00",
      actor: "Clara",
      step: "Track Claim Status",
      action: "Denied — Rejection Code F14: Insufficient documentation. Routed to Dee.",
      fileLocation: "/claims/20250816-L01/denial_eob_F14.pdf"
    },
    {
      date: "2025-08-18 10:05",
      actor: "Dee",
      step: "Categorize Denial",
      action: "Classified as Medical Necessity denial. Requested updated referral letter from patient.",
      fileLocation: "/denials/20250816-L01/analysis.json"
    },
    {
      date: "2025-08-18 10:10",
      actor: "Clara",
      step: "Contact Patient",
      action: "SMS + portal message sent requesting updated referral letter.",
      fileLocation: "/communications/patient/30984567/contact_log_20250818.txt"
    },
    {
      date: "2025-08-18 12:00",
      actor: "Clara",
      step: "Receive Documentation",
      action: "Patient uploaded updated referral letter via portal.",
      fileLocation: "/patient-portal/uploads/leila/referral_update_20250818.pdf"
    },
    {
      date: "2025-08-18 13:00",
      actor: "HITL",
      step: "Review Denial + Codes",
      action: "Verified documentation, confirmed codes unchanged, approved for resubmission.",
      fileLocation: "/reviews/hitl/round1_denial_review.pdf"
    },
    {
      date: "2025-08-18 13:15",
      actor: "Dee",
      step: "Reactivate Clara",
      action: "Forwarded updated packet and instructions to Clara for resubmission.",
      fileLocation: "/denials/20250816-L01/reactivation_clara_msg.json"
    },
    {
      date: "2025-08-18 14:00",
      actor: "Clara",
      step: "Resubmit Corrected Claim",
      action: "Re-submitted claim as Claim ID 20250818-L02 (Round 2).",
      fileLocation: "/claims/20250818-L02/claim_v2.xml"
    }
  ],

  // Round 2
  [
    {
      date: "2025-08-20 09:30",
      actor: "Clara",
      step: "Track Claim Status",
      action: "Denied again — Rejection Code F14. Routed to Dee.",
      fileLocation: "/claims/20250818-L02/denial_eob_F14.pdf"
    },
    {
      date: "2025-08-20 09:35",
      actor: "Dee",
      step: "Categorize Denial",
      action: "Determined additional documentation (pain scale + SOAP addendum) required.",
      fileLocation: "/denials/20250818-L02/analysis.json"
    },
    {
      date: "2025-08-20 09:40",
      actor: "Clara",
      step: "Contact Patient",
      action: "Called patient requesting pain scale and activity impact notes.",
      fileLocation: "/communications/patient/30984567/contact_log_20250820.txt"
    },
    {
      date: "2025-08-20 11:00",
      actor: "Clara",
      step: "Receive Documentation",
      action: "Received pain scale chart and activity notes via portal.",
      fileLocation: "/patient-portal/uploads/leila/pain_scale_20250820.pdf"
    },
    {
      date: "2025-08-20 11:15",
      actor: "Clara",
      step: "Contact Physician",
      action: "Sent secure message to Dr. Aisha requesting SOAP addendum.",
      fileLocation: "/communications/physician/dr_aisha_soap_addendum_request.msg"
    },
    {
      date: "2025-08-20 12:00",
      actor: "Physician",
      step: "Provide Documentation",
      action: "Uploaded SOAP addendum confirming conservative management attempts.",
      fileLocation: "/ehr/orthopaedics/leila/soap_addendum_20250820.pdf"
    },
    {
      date: "2025-08-20 13:00",
      actor: "HITL",
      step: "Review + Approve Codeset",
      action: "Confirmed codes unchanged after additional documentation, approved resubmission.",
      fileLocation: "/reviews/hitl/round2_code_review_approval.pdf"
    },
    {
      date: "2025-08-20 13:15",
      actor: "Dee",
      step: "Reactivate Clara",
      action: "Sent updated packet + approval to Clara for resubmission.",
      fileLocation: "/denials/20250818-L02/reactivation_clara_msg.json"
    },
    {
      date: "2025-08-20 14:00",
      actor: "Clara",
      step: "Resubmit Corrected Claim",
      action: "Re-submitted claim as Claim ID 20250820-L03 (Round 3).",
      fileLocation: "/claims/20250820-L03/claim_v3.xml"
    }
  ],

  // Round 3
  [
    {
      date: "2025-08-22 11:00",
      actor: "Clara",
      step: "Track Claim Status",
      action: "Denied third time — Rejection Code F14. Routed to Dee.",
      fileLocation: "/claims/20250820-L03/denial_eob_F14.pdf"
    },
    {
      date: "2025-08-22 11:05",
      actor: "Dee",
      step: "Categorize Denial",
      action: "Triple denial detected — escalated to appeal creation.",
      fileLocation: "/denials/20250820-L03/analysis.json"
    },
    {
      date: "2025-08-22 11:30",
      actor: "Dee",
      step: "Draft Appeal Letter",
      action: "Generated formal appeal letter citing medical necessity.",
      fileLocation: "/appeals/APL-003/appeal_letter_draft.docx"
    },
    {
      date: "2025-08-22 12:30",
      actor: "HITL",
      step: "Review Appeal Packet",
      action: "Verified SOAP note, referral, MRI report, and PA approval.",
      fileLocation: "/appeals/APL-003/appeal_packet_review_20250822.pdf"
    },
    {
      date: "2025-08-22 12:45",
      actor: "Dee",
      step: "Reactivate Clara",
      action: "Sent approved appeal packet to Clara for submission.",
      fileLocation: "/appeals/APL-003/reactivation_clara_msg.json"
    },
    {
      date: "2025-08-22 13:30",
      actor: "Clara",
      step: "Submit Appeal Letter",
      action: "Appeal letter APL-003 submitted to NoorCare Appeals Department.",
      fileLocation: "/appeals/APL-003/submission_receipt_20250822.pdf"
    },
    {
      date: "2025-08-23 09:00",
      actor: "Dee",
      step: "Track Appeal Deadlines",
      action: "SLA timer started. Awaiting payer decision.",
      fileLocation: "/appeals/APL-003/sla_tracker.json"
    }
  ]
];
