import { PortableTextBlock } from "sanity";

export type CodeSnippet = {
  language: "ts" | "js" | "html" | "tsx" | "jsx"; // Define supported languages
  codeSnippet: string; // The actual code as a string
  title: string; // Title of the code snippet
};

export type implementationSteps = {
  _key: string;
  stepTitle: string; // Title of the step
  stepId: string; // Unique identifier for the step
  description: string; // Detailed explanation for the step
  code: CodeSnippet; // Array of code snippets related to the step
};

export type explanationSteps = {
  _key: string;
  stepTitle: string; // Title of the step
  stepId: string; // Unique identifier for the step
  description: string; // Detailed explanation for the step
  code: CodeSnippet;
};

export type keyChanges = {
  keyChangesDescription: string; // Description of the key changes
  code: CodeSnippet; // Array of code snippets related to the key changes
};

export type implementingEnhancedFunctionality = {
  enhancedFunctionalityTitle: string;
  enhancedFunctionalityDescription: string;
  code: CodeSnippet;
  keyChanges: keyChanges;
};

export type enhamcements = {
  enhancementstitle: string;
  enhancementsDescription: string;
  code: CodeSnippet;
};

export type DocsType = {
  _id: string; // Unique identifier from Sanity
  _createdAt: string; // Creation date of the document
  title: string; // Title of the documentation
  overview: { content: string };
  prerequisites?: string[]; // List of prerequisites
  implementationSteps: implementationSteps[]; // Array of steps in the documentation
  explanationSteps: explanationSteps[]; // Array of steps in the documentation
  implementingEnhancedFunctionality: implementingEnhancedFunctionality;
  enhamcements: enhamcements;
  conclusion: PortableTextBlock[];
};

export type MarkdownFile = {
  id: string;
  filename: string;
  title: string;
  content: string;
  createdAt: string;
  updatedAt: string;
};
