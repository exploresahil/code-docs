import { DocsType } from "@/types/types";
import { createClient, groq } from "next-sanity";
import clientConfig from "./config/client-config";

export async function getDocs(): Promise<DocsType[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "docs"] {
        _id,
        _createdAt,
        title,
        overview {
            content,
        },
        prerequisites,
        implementationSteps[] {
            _key,
            stepTitle,
            stepId,
            description,
            code {
              title,
              language,
              codeSnippet,
            }
        },
          explanationSteps[] {
            _key,
            stepTitle,
            stepId,
            code {
              title,
              language,
              codeSnippet,
            },
            description,
        },
          implementingEnhancedFunctionality {
            enhancedFunctionalityTitle,
            enhancedFunctionalityDescription,
            code {
              title,
              language,
              codeSnippet,
            },
            keyChanges {
               keyChangesDescription,
                code {
                title,
                language,
                codeSnippet,
              },
            },
        },
        enhamcements {
          enhancementstitle,
          enhancementsDescription,
            code{
            title,
            language,
              codeSnippet,
            }
        },
        conclusion,
      }`
  );
}
