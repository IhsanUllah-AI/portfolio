/**
 * Ihsan Ullah - Portfolio Projects Configuration
 *
 * Edit this file to add, remove, or modify projects displayed on the portfolio.
 * Categories: 'all' | 'ai-rag' | 'agents' | 'vision' | 'trading'
 */

const projectsData = [
  {
    id: "multi-tenant-rag-backend",
    title: "Multi-Tenant RAG Backend",
    category: "ai-rag",
    badge: "Tenant-Isolated RAG",
    featured: true,
    isConfidential: false,
    description: "A production-quality Retrieval-Augmented Generation backend that answers questions about company employee handbooks with strict tenant isolation — each tenant gets a fully separate retrieval pipeline so cross-tenant data leakage is architecturally impossible at the retrieval layer.",
    keyPoints: [
      "Collection-level isolation — each tenant queries only its own dedicated ChromaDB collection, never a shared index",
      "Idempotent ingestion with deterministic SHA-256 chunk IDs (PyPDFLoader + RecursiveCharacterTextSplitter, upsert-safe reruns)",
      "LCEL RAG chain (retrieve → verify → generate) with a metadata tenant_id cross-check as a belt-and-suspenders integrity pass, served via FastAPI and Groq LLM"
    ],
    techStack: ["Python", "FastAPI", "LangChain", "ChromaDB", "Groq API", "HuggingFace Embeddings", "Pydantic"],
    image: "assets/images/multi-tenant-rag.svg",
    githubUrl: "https://github.com/IhsanUllah-AI/multi-tenant-rag-system",
    liveUrl: "https://github.com/IhsanUllah-AI/multi-tenant-rag-system"
  },
  {
    id: "crypto-knowledge-graph",
    title: "Neo4j Knowledge Graph Crypto Intelligence Chatbot",
    category: "agents",
    badge: "Confidential",
    featured: true,
    isConfidential: true,
    confidentialNotice: "Proprietary Project (ByteBoom) — Graph schema & Text-to-Cypher pipelines are confidential.",
    description: "LLM-powered conversational agent for a Neo4j knowledge graph that converts natural language questions into Cypher queries, analyzes whale transactions, and discovers hidden capital flows across on-chain entities.",
    keyPoints: [
      "Natural Language to Cypher query translation with schema awareness",
      "Telegram whale tracking & transaction entity extraction",
      "Graph-based relationship mapping for wallet clusters"
    ],
    techStack: ["Python", "Neo4j", "Cypher", "LangChain", "FastAPI", "SQLite"],
    image: "assets/images/graph-crypto.svg",
    githubUrl: null,
    liveUrl: null
  },
  {
    id: "fake-review-detection",
    title: "Fake Review Detection System (Final Year Project)",
    category: "ai-rag",
    badge: "RoBERTa + GRU",
    featured: true,
    isConfidential: false,
    description: "Final Year Project: a GRU-augmented RoBERTa classifier for e-commerce fake review detection, fusing the contextual strength of transformer encoders with recurrent temporal modeling to identify inauthentic reviews.",
    keyPoints: [
      "RoBERTa transformer encoder fused with a GRU layer for sequential context modeling",
      "Reached 93% accuracy on e-commerce review authenticity classification",
      "Feature engineering & ablation studies to drive incremental accuracy gains"
    ],
    techStack: ["Python", "PyTorch", "RoBERTa", "GRU", "Hugging Face", "Scikit-learn"],
    image: "assets/images/review-nlp.svg",
    githubUrl: "https://github.com/Ihsanullah-AI",
    liveUrl: "https://github.com/Ihsanullah-AI"
  },
  {
    id: "ai-recruitment",
    title: "AI Recruitment Screening Automation System",
    category: "agents",
    badge: "LangGraph & Groq",
    featured: true,
    isConfidential: false,
    description: "An automated AI recruitment screening system for candidate technical evaluations. Analyzes candidate CVs against job specifications using an agentic LLM workflow with LangGraph, structured schema validation, scoring, and an interactive interface.",
    keyPoints: [
      "Agentic workflow with automated candidate evaluation",
      "Structured schema validation with multi-criteria scoring",
      "Fast CV parsing & candidate profiling with actionable insights"
    ],
    techStack: ["FastAPI", "LangGraph", "LangChain", "Groq API", "Pydantic v2", "SQLAlchemy", "PyMuPDF"],
    image: "assets/images/recruitment.jpg",
    githubUrl: "https://github.com/Ihsanullah-AI/AI_Recruitment_Screening_Automation_System",
    liveUrl: "https://github.com/Ihsanullah-AI/AI_Recruitment_Screening_Automation_System"
  },
  {
    id: "advanced-rag",
    title: "Advanced Knowledge & RAG Retrieval Pipeline",
    category: "ai-rag",
    badge: "Hybrid Search & Rerank",
    featured: true,
    isConfidential: false,
    description: "An intelligent Retrieval-Augmented Generation (RAG) system built for accurate document search and question answering. Uses hybrid search combining keyword and semantic matching with neural reranking to deliver grounded, context-aware answers.",
    keyPoints: [
      "Hybrid search combining keyword matching and semantic vector search",
      "Neural reranking to prioritize the most relevant document segments",
      "Accurate, fact-based answers grounded in source material"
    ],
    techStack: ["Python", "FastAPI", "LangChain", "LangGraph", "ChromaDB", "Hugging Face"],
    image: "assets/images/rag.jpg",
    githubUrl: "https://github.com/Ihsanullah-AI/Advanced-RAG",
    liveUrl: "https://github.com/Ihsanullah-AI/Advanced-RAG"
  },
  {
    id: "trading-bot",
    title: "Algorithmic Crypto Trading & Market Intelligence Bot",
    category: "trading",
    badge: "FinTech & AI",
    featured: true,
    isConfidential: false,
    description: "Algorithmic trading system analyzing 440+ Binance USDT pairs across multiple timeframes. Computes 8 technical confluence indicators to produce a unified opportunity score with WebSocket risk monitoring.",
    keyPoints: [
      "Real-time analysis of 440+ Binance trading pairs via WebSockets",
      "Multi-timeframe technical indicator confluence engine (RSI, MACD, Bollinger)",
      "Automated limit/OCO order execution with risk mitigation"
    ],
    techStack: ["Python", "FastAPI", "Binance API", "WebSockets", "Pandas", "TA-Lib"],
    image: "assets/images/trading.jpg",
    githubUrl: "https://github.com/Ihsanullah-AI/Trading_Bot",
    liveUrl: "https://github.com/Ihsanullah-AI/Trading_Bot"
  },
  {
    id: "local-ai-doc-pipeline",
    title: "Local AI Document Pipeline & Offline QA",
    category: "ai-rag",
    badge: "Privacy AI",
    featured: true,
    isConfidential: false,
    description: "Privacy-first offline document intelligence pipeline running on local infrastructure. Ingests PDFs, docs, and tables using local embedding models and quantized LLMs with complete data privacy.",
    keyPoints: [
      "Local, air-gapped document ingestion and contextual QA",
      "Ollama & Hugging Face open-source LLM orchestration",
      "ChromaDB persistent vector indexing with fast retrieval"
    ],
    techStack: ["Python", "Ollama", "LangChain", "ChromaDB", "Hugging Face", "FastAPI"],
    image: "assets/images/local-doc-pipeline.svg",
    githubUrl: "https://github.com/Ihsanullah-AI/Local_AI_Document_Pipeline",
    liveUrl: "https://github.com/Ihsanullah-AI/Local_AI_Document_Pipeline"
  },
  {
    id: "facial-recognition-attendance",
    title: "Facial Recognition Smart Attendance System",
    category: "vision",
    badge: "FaceNet & FAISS",
    featured: true,
    isConfidential: false,
    description: "A real-time facial recognition attendance system designed for automated check-ins. Detects faces with MTCNN, extracts facial embeddings via FaceNet, and performs rapid identity matching using FAISS similarity search.",
    keyPoints: [
      "Accurate face detection using MTCNN & deep feature extraction via FaceNet",
      "High-speed identity matching with FAISS vector similarity search",
      "Automated attendance logging with a high-performance FastAPI backend"
    ],
    techStack: ["Python", "FastAPI", "MTCNN", "FaceNet", "FAISS", "OpenCV"],
    image: "assets/images/vision.jpg",
    githubUrl: "https://github.com/Ihsanullah-AI/Facial-_Recognition_Attendence_system",
    liveUrl: "https://github.com/Ihsanullah-AI/Facial-_Recognition_Attendence_system"
  },
  {
    id: "quran-reciter-identification",
    title: "Quran Reciter Identification & Verse Classification System",
    category: "vision",
    badge: "Audio & Deep Learning",
    featured: true,
    isConfidential: false,
    description: "An end-to-end audio intelligence pipeline that identifies individual Quran reciters by voice and classifies verses by thematic content. Combines speech-to-text, acoustic feature extraction, and deep learning classifiers for reciter fingerprinting and semantic verse tagging.",
    keyPoints: [
      "Whisper ASR transcription paired with librosa MFCC, chroma & spectral contrast voice fingerprinting",
      "CNN classifier over mel-spectrograms for individual reciter identification",
      "LSTM network with Word2Vec embeddings for thematic verse classification, reaching 91% F1-score"
    ],
    techStack: ["Python", "OpenAI Whisper", "Librosa", "PyTorch", "CNN", "LSTM", "Word2Vec"],
    image: "assets/images/quran-audio.svg",
    githubUrl: "https://github.com/Ihsanullah-AI",
    liveUrl: "https://github.com/Ihsanullah-AI"
  },
  {
    id: "youtube-qa-rag",
    title: "YouTube Video RAG Semantic Search & QA Bot",
    category: "ai-rag",
    badge: "Conversational QA",
    featured: false,
    isConfidential: false,
    description: "Conversational QA application that transcribes and indexes YouTube videos on-demand, allowing users to ask natural language questions and receive precise timestamp-cited answers via a Gradio UI.",
    keyPoints: [
      "Automated transcript fetching and semantic chunking",
      "Chroma vector indexing for precise segment localization",
      "Interactive Gradio dark-mode conversational interface"
    ],
    techStack: ["Python", "LangChain", "ChromaDB", "YouTubeTranscriptAPI", "Gradio"],
    image: "assets/images/youtube-qa.svg",
    githubUrl: "https://github.com/Ihsanullah-AI",
    liveUrl: "https://github.com/Ihsanullah-AI"
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = projectsData;
}
