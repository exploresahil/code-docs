import { Rule } from "@sanity/types";
import { title } from "process";

interface ImplementationStep {
  stepTitle: string; // Title of the step
  stepId?: string; // Optional step ID that will be generated
  // Add other fields as necessary
}

const generateStepId = (title: string) => {
  // Convert the title to camelCase and remove spaces
  return title
    .replace(/\s(.)/g, (match) => match.toUpperCase()) // Capitalize first letter of each word (after space)
    .replace(/\s+/g, "") // Remove spaces
    .replace(/^[A-Z]/, (match) => match.toLowerCase()); // Lowercase the first letter
};

export const docsSchema = {
  name: "docs",
  title: "Documentation",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      description: "The title of the documentation",
      validation: (Rule: Rule) => Rule.required().error("Title is required."),
    },
    {
      name: "overview",
      title: "Overview",
      type: "object",
      fields: [
        {
          name: "content",
          title: "Content",
          type: "text",
          description: "Content or description for the overall overview",
          validation: (Rule: Rule) =>
            Rule.required().error("Content is required."),
        },
      ],
      description: "Overview section with content",
    },

    {
      name: "prerequisites",
      title: "Prerequisites",
      type: "array",
      of: [{ type: "string" }],
      description: "List of prerequisites for following the guide",
    },
    {
      name: "implementationSteps",
      title: "Implementation Steps",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "stepTitle",
              title: "Step Title",
              type: "string",
            },
            {
              name: "stepId",
              title: "Step ID",
              type: "string",
              description: "Automatically generated from the Step Title.",
            },
            {
              name: "description",
              title: "Description",
              type: "text",
            },
            {
              name: "code",
              title: "Code Snippet",
              type: "object",

              fields: [
                {
                  name: "title",
                  title: "Title",
                  type: "string",
                  description: "Title of the code snippet",
                },
                {
                  name: "language",
                  title: "Language",
                  type: "string",
                  options: {
                    list: [
                      { title: "TypeScript", value: "ts" },
                      { title: "TypeScriptX", value: "tsx" },
                      { title: "JavaScript", value: "js" },
                      { title: "JavaScriptX", value: "jsx" },
                      { title: "HTML", value: "html" },
                    ],
                  },
                },
                {
                  name: "codeSnippet",
                  title: "Code",
                  type: "text",
                  description: "The actual code snippet for this step",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "explanationSteps",
      title: "Explanation Steps",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "stepTitle",
              title: "Step Title",
              type: "string",
            },
            {
              name: "stepId",
              title: "Step ID",
              type: "string",
              description: "Automatically generated from the Step Title.",
            },

            {
              name: "code",
              title: "Code Snippet",
              type: "object",
              fields: [
                {
                  name: "title",
                  title: "Title",
                  type: "string",
                  description: "Title of the code snippet",
                },
                {
                  name: "language",
                  title: "Language",
                  type: "string",
                  options: {
                    list: [
                      { title: "TypeScript", value: "ts" },
                      { title: "TypeScriptX", value: "tsx" },
                      { title: "JavaScript", value: "js" },
                      { title: "JavaScriptX", value: "jsx" },
                      { title: "HTML", value: "html" },
                    ],
                  },
                },
                {
                  name: "codeSnippet",
                  title: "Code",
                  type: "text",
                  description: "The actual code snippet for this step",
                },
              ],
            },
            {
              name: "description",
              title: "Description",
              type: "text",
            },
          ],
        },
      ],
    },
    {
      name: "implementingEnhancedFunctionality",
      title: "Implementing Enhanced Functionality",
      type: "object",
      fields: [
        {
          name: "enhancedFunctionalityTitle",
          title: "Enhanced Functionality Title",
          type: "string",
        },
        {
          name: "enhancedFunctionalityDescription",
          title: "Enhanced Functionality Description",
          type: "text",
        },
        {
          name: "code",
          title: "Code Snippet",
          type: "object",
          fields: [
            {
              name: "title",
              title: "Title",
              type: "string",
              description: "Title of the code snippet",
            },
            {
              name: "language",
              title: "Language",
              type: "string",
              options: {
                list: [
                  { title: "TypeScript", value: "ts" },
                  { title: "TypeScriptX", value: "tsx" },
                  { title: "JavaScript", value: "js" },
                  { title: "JavaScriptX", value: "jsx" },
                  { title: "HTML", value: "html" },
                ],
              },
            },
            {
              name: "codeSnippet",
              title: "Code",
              type: "text",
              description: "The actual code snippet for this step",
            },
          ],
        },
        {
          name: "keyChanges",
          title: "Key Changes",
          type: "object",
          fields: [
            {
              name: "keyChangesDescription",
              title: "Key Changes Description",
              type: "text",
            },
            {
              name: "code",
              title: "Code Snippet",
              type: "object",
              fields: [
                {
                  name: "title",
                  title: "Title",
                  type: "string",
                  description: "Title of the code snippet",
                },
                {
                  name: "language",
                  title: "Language",
                  type: "string",
                  options: {
                    list: [
                      { title: "TypeScript", value: "ts" },
                      { title: "TypeScriptX", value: "tsx" },
                      { title: "JavaScript", value: "js" },
                      { title: "JavaScriptX", value: "jsx" },
                      { title: "HTML", value: "html" },
                    ],
                  },
                },
                {
                  name: "codeSnippet",
                  title: "Code",
                  type: "text",
                  description: "The actual code snippet for this step",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "enhamcements",
      title: "Enhancements",
      type: "object",
      fields: [
        {
          name: "enhancementstitle",
          title: "Enhancements Title",
          type: "string",
        },
        {
          name: "enhancementsDescription",
          title: "Enhancements Description",
          type: "text",
        },
        {
          name: "code",
          title: "Code Snippet",
          type: "object",
          fields: [
            {
              name: "title",
              title: "Title",
              type: "string",
              description: "Title of the code snippet",
            },
            {
              name: "language",
              title: "Language",
              type: "string",
              options: {
                list: [
                  { title: "TypeScript", value: "ts" },
                  { title: "TypeScriptX", value: "tsx" },
                  { title: "JavaScript", value: "js" },
                  { title: "JavaScriptX", value: "jsx" },
                  { title: "HTML", value: "html" },
                ],
              },
            },
            {
              name: "codeSnippet",
              title: "Code",
              type: "text",
              description: "The actual code snippet for this step",
            },
          ],
        },
      ],
    },
    {
      name: "conclusion",
      title: "Conclusion",
      type: "array",
      of: [{ type: "block" }],
      description: "The conclusion section of the documentation",
    },
  ],
};
