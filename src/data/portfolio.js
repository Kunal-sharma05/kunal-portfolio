/** @typedef {{title:string,tags:string[],summary:string,highlights:string[],kind:string}} Project */
export const portfolio = {
  architecture: {
  "kicker": "AZURE / RAG + LONG-TERM MEMORY",
  "title": "Agentic support assistant",
  "source": "Salesforce",
  "sourceDetail": "Cases · Accounts · Comments",
  "stages": [
    {
      "title": "Ingest & approve",
      "nodes": [
        "API + Postgres outbox",
        "Event Hubs / Kafka",
        "Extraction + promotion",
        "Container Apps + Docker"
      ],
      "detail": "Redact PII → validate evidence → approve or review → index. Dead-letter topics capture failures."
    },
    {
      "title": "Store trusted memory",
      "nodes": [
        "PostgreSQL",
        "FAISS / Blob Storage",
        "Key Vault"
      ],
      "detail": "Approved notes and provenance; versioned, rebuildable vectors; separate encrypted PII vault."
    },
    {
      "title": "Retrieve & reason",
      "nodes": [
        "Keyword ∥ vector search",
        "RRF fusion + context",
        "Azure OpenAI"
      ],
      "detail": "Guard the query. Filter by tenant, ACL and product version. Draft with memory citations."
    },
    {
      "title": "Check before action",
      "nodes": [
        "Citations + groundedness",
        "Content Safety + PII",
        "Salesforce MCP"
      ],
      "detail": "Allowlisted tools only. Guard failures withhold memory-derived answers and escalate."
    }
  ],
  "output": "Human approval for every CRM write",
  "operations": "Container Apps + KEDA · OpenTelemetry · Evaluation gates · Bicep + CI/CD",
  "detailsLabel": "Read the architecture flow",
  "description": "Architecture overview from the supplied design document. Salesforce changes enter an ingestion API, pass a Presidio redaction checkpoint, and publish to Event Hubs using the Kafka protocol. Failed publishes require retries; source replay guarantees must be validated. Extraction redacts PII, uses deterministic rules first and schema-bound LLM extraction only for flagged notes. Validation and promotion gates separate approved memory from quarantined candidates. The indexer commits to Postgres before updating derived FAISS indexes in Blob Storage. At query time, input guards and tenant/ACL filters constrain keyword and vector recall. Reciprocal Rank Fusion assembles context for Azure OpenAI. Output guards verify citations, groundedness, content safety and PII before allowlisted Salesforce MCP tools can act. All CRM writes require human approval. This diagram represents the proposed architecture, not a claim of deployed infrastructure."
},
  name: 'Kunal Sharma', location: 'Chennai, India', titles: ['GenAI Developer', 'Agentic AI', 'Applied AI'],
  intro: 'I build enterprise AI systems that turn messy documents and legacy code into reliable, human-reviewed workflows.',
  nav: ['Home','About','Experience','Projects','Skills','Education','Contact'],
  labels: { brand: 'KS', discipline: 'PORTFOLIO / APPLIED INTELLIGENCE', heroTop: 'ENGINEERING INTELLIGENCE, WITH INTENTION.', projects: 'View Projects', resume: 'Download Resume', scroll: 'SCROLL TO EXPLORE', about: 'Intelligence needs intention.', experience: 'Built in the real world.', projectsHeading: 'Selected systems.', skills: 'A practical toolkit.', education: 'Always learning.', contact: 'Let’s build something useful.', aboutKicker: 'THE APPROACH', experienceKicker: 'THE JOURNEY', projectsKicker: 'THE WORK', skillsKicker: 'THE TOOLKIT', educationKicker: 'THE FOUNDATION', contactKicker: 'THE NEXT CONVERSATION', projectHint: 'Scroll to explore / Select a project for details', projectOpen: 'Explore project', close: 'Close project', outcomes: 'Approach & outcomes', awardTitle: 'Recognition & certifications', email: 'Start a conversation', graph: 'AGENTIC WORKFLOW / HUMAN IN THE LOOP', graphSteps: ['INPUT','RETRIEVE','REASON','VALIDATE','REVIEW','OUTPUT'], metricKicker: 'IMPACT, MEASURED', footer: 'Designed and built with React. © 2026 Kunal Sharma.', menu: 'Toggle navigation', previous: 'Previous project', next: 'Next project', explore: 'Exploring', focus: 'FOCUS / ENTERPRISE AI', index: 'SELECTED WORK / 2024—2026' },
  about: 'I’m a GenAI Developer with 2.5 years at Hexaware Technologies, shipping enterprise AI systems for a healthcare and insurance client. I work on LLM-driven document intelligence, AI-assisted migration automation, and agentic workflows adopted by delivery teams. I own problems end to end: interviewing stakeholders, deciding where AI genuinely helps, evaluating LLM output, and designing human-in-the-loop boundaries.',
  principles: ['Human-in-the-loop','Evaluation-driven','End-to-end ownership'],
  experience: [{role:'GenAI Developer',company:'Hexaware Technologies',detail:'Healthcare & Insurance Client',period:'May 2024 – Present',location:'Chennai, India'}, {role:'Internship',company:'Hindalco Industries',detail:'',period:'Internship',location:''}],
  /** @type {Project[]} */
  projects: [
    {title:'AI-Powered Collaboration Intelligence Platform',kind:'RESEARCH INTELLIGENCE',tags:['Tavily','LLM validation','PostgreSQL','pgvector'],summary:'Automated company-research workflow that finds relevant companies by country or drug and produces source-backed results from the top five web sources.',highlights:['Iterative LLM validation loop that verifies extracted details against cited sources.','Cosine-similarity matching (pgvector) against client-defined selection criteria.','Human review for outputs scoring below 70%.','Research turnaround reduced from ~1 week to ~1 day, ~70% accuracy in source-based testing.']},
    {title:'FS/TS Generation Framework for Legacy SAP Code (Cursor)',kind:'CODE TO KNOWLEDGE',tags:['Cursor','Agents','Rules','Hooks','SAP'],summary:'Documentation agent that generates template-compliant functional and technical specs from undocumented legacy SAP code, grounded only in code evidence.',highlights:['Chose Cursor over custom infrastructure to reduce maintenance.','~80% accuracy in manual evaluations, approved by BAs and developers.','CLI published to the company EDP Agent Hub through a CI/CD pipeline.']},
    {title:'Highspot to SharePoint Migration',kind:'INTELLIGENT MIGRATION',tags:['Python','Playwright','RAG','Pydantic','Microsoft Graph'],summary:'Migration of 10K+ assets (PDFs, decks, Word, video, images) with metadata and hierarchy preserved.',highlights:['~85% of workload migrates fully automatically via deterministic API path.','AI-assisted page mapping using a component knowledge base (RAG) onto SharePoint Modern Page layouts.','Strict page JSON validated with Pydantic before publishing; 60–70% accuracy with human review for gaps.','Rebuilt TreeView keyword columns via SharePoint REST API so search stays intact.']},
    {title:'Contract Intelligence Platform',kind:'DOCUMENT INTELLIGENCE',tags:['Docker','OCR','Vision GPT','Embeddings','SharePoint'],summary:'Containerized platform extracting entities and metadata from digital and scanned contracts and uploading structured results to SharePoint.',highlights:['Processes 100+ contracts annually.','~80% reduction in manual review effort.','Multiprocessing cut batch time by ~30%.','Semantic chunking and contextual retrieval pipeline.']},
    {title:'Snowflake GenAI Data Dictionary (POC)',kind:'DATA UNDERSTANDING',tags:['Snowflake','Azure OpenAI','RAG'],summary:'Generates business descriptions for enterprise data assets using Azure OpenAI with RAG.',highlights:[]}
  ],
  metrics:[{value:10,suffix:'K+',label:'assets migrated'},{value:85,prefix:'~',suffix:'%',label:'workload automated'},{value:80,prefix:'~',suffix:'%',label:'less review effort'},{value:100,suffix:'+',label:'contracts annually'},{value:30,prefix:'~',suffix:'%',label:'faster batch processing'},{value:1,prefix:'~',suffix:' day',label:'from ~1 week turnaround'}],
  skills: {'LLMs & Agents':['Azure OpenAI','GPT Vision','LangGraph','LangChain','Agentic workflows','Tool calling','Prompt & context engineering','Spec-driven development'],'RAG & Document AI':['Embeddings','Semantic chunking','Contextual retrieval','FAISS','OCR','Entity extraction'],'Evaluation & Reliability':['DeepEval','LLM validation loops','Pydantic','Guardrails','Human-in-the-loop'],'Backend & Automation':['Python','FastAPI','Multiprocessing','REST APIs','SQLite','Playwright','React','TypeScript','Microservices','Java'],'Integrations & DevOps':['Microsoft Graph API','SharePoint REST API','Highspot API','Tavily','Snowflake','Azure','GitLab CI/CD','Kafka','Docker']},
  awards:['Pinnacle of the Quarter and Certificate of Appreciation, Hexaware Technologies (GenAI initiatives)','Claude Certified Developer – Foundations (Anthropic)','Claude Certified Associate – Foundations (Anthropic)'],
  education:{degree:'B.Tech, Computer Science Engineering',school:'Silicon Institute of Technology, Odisha (Orissa)',grade:'CGPA 8.8',period:'2019 – 2023'},
  contact:{email:'itsmekunal0501@gmail.com',phone:'+91 73478 37852',linkedin:'https://linkedin.com/in/kunal-fullstackdeveloper',github:'https://github.com/Kunal-sharma05'},
};
