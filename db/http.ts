import { HttpResponseDataType } from "@/types/types";

export const httpResponseData: HttpResponseDataType = {
    title: "HTTP Response Status Codes and Their Meanings",
    desc: "This document provides an organized list of common HTTP response status codes, categorized by their type, with corresponding descriptions.",
    status: {
        category: [
            {
                title: "1xx",
                desc: "Informational",
                codes: [
                    {
                        code: 100,
                        title: "Continue",
                        desc: "The client should continue with the request."
                    },
                    {
                        code: 101,
                        title: "Switching Protocols",
                        desc: "The server is switching to another protocol."
                    },
                    {
                        code: 102,
                        title: "Processing",
                        desc: "The server has received and is processing the request, but no response is available yet."
                    },
                    {
                        code: 103,
                        title: "Early Hints",
                        desc: "The server is providing hints about the response that will be sent later."
                    }
                ]
            },
            {
                title: "2xx",
                desc: "Success",
                codes: [
                    {
                        code: 200,
                        title: "OK",
                        desc: "The request was successful."
                    },
                    {
                        code: 201,
                        title: "Created",
                        desc: "The request has been fulfilled and resulted in a new resource being created."
                    },
                    {
                        code: 202,
                        title: "Accepted",
                        desc: "The request has been accepted for processing, but the processing has not been completed."
                    },
                    {
                        code: 203,
                        title: "Non-Authoritative Information",
                        desc: "The server is delivering a response that may be from a cached copy."
                    },
                    {
                        code: 204,
                        title: "No Content",
                        desc: "The server successfully processed the request, but is not returning any content."
                    },
                    {
                        code: 205,
                        title: "Reset Content",
                        desc: "The server successfully processed the request and is not returning any content, but expects the client to reset the document view."
                    },
                    {
                        code: 206,
                        title: "Partial Content",
                        desc: "The server is delivering only part of the resource due to a range request."
                    },
                    {
                        code: 207,
                        title: "Multi-Status",
                        desc: "The response consists of multiple status codes and status messages."
                    },
                    {
                        code: 208,
                        title: "Already Reported",
                        desc: "The members of a DAV binding collection are already members of other collections."
                    },
                    {
                        code: 226,
                        title: "IM Used",
                        desc: "The server has fulfilled a GET request for the resource, and the response is a representation of the result of applying the supplied IM (Instant Messaging) data to the current document."
                    }
                ]
            },
            {
                title: "3xx",
                desc: "Redirection",
                codes: [
                    {
                        code: 300,
                        title: "Multiple Choices",
                        desc: "The requested resource is available under multiple URIs."
                    },
                    {
                        code: 301,
                        title: "Moved Permanently",
                        desc: "The requested resource has been permanently moved to a new URI."
                    },
                    {
                        code: 302,
                        title: "Found",
                        desc: "The requested resource has been temporarily moved to a new URI."
                    },
                    {
                        code: 303,
                        title: "See Other",
                        desc: "The response to the request can be found under a different URI."
                    },
                    {
                        code: 304,
                        title: "Not Modified",
                        desc: "The resource has not been modified since the last time it was requested."
                    },
                    {
                        code: 305,
                        title: "Use Proxy",
                        desc: "The requested resource must be accessed through the specified proxy."
                    },
                    {
                        code: 307,
                        title: "Temporary Redirect",
                        desc: "The requested resource has been temporarily moved to a new URI."
                    },
                    {
                        code: 308,
                        title: "Permanent Redirect",
                        desc: "The requested resource has been permanently moved to a new URI."
                    }
                ]
            },
            {
                title: "4xx",
                desc: "Client Error",
                codes: [
                    {
                        code: 400,
                        title: "Bad Request",
                        desc: "The server cannot understand the request due to malformed syntax."
                    },
                    {
                        code: 401,
                        title: "Unauthorized",
                        desc: "The request requires user authentication."
                    },
                    {
                        code: 402,
                        title: "Payment Required",
                        desc: "Reserved for future use."
                    },
                    {
                        code: 403,
                        title: "Forbidden",
                        desc: "The server understood the request, but refuses to fulfill it."
                    },
                    {
                        code: 404,
                        title: "Not Found",
                        desc: "The requested resource could not be found."
                    },
                    {
                        code: 405,
                        title: "Method Not Allowed",
                        desc: "The requested method is not allowed for the resource."
                    },
                    {
                        code: 406,
                        title: "Not Acceptable",
                        desc: "The server cannot produce a response that the client accepts."
                    },
                    {
                        code: 407,
                        title: "Proxy Authentication Required",
                        desc: "The client must authenticate itself with the proxy server."
                    },
                    {
                        code: 408,
                        title: "Request Timeout",
                        desc: "The server timed out waiting for the client to send the request."
                    },
                    {
                        code: 409,
                        title: "Conflict",
                        desc: "The request could not be completed due to a conflict with the current state of the resource."
                    },
                    {
                        code: 410,
                        title: "Gone",
                        desc: "The resource requested is no longer available and will not be available again."
                    },
                    {
                        code: 411,
                        title: "Length Required",
                        desc: "The request must specify the length of its content."
                    },
                    {
                        code: 412,
                        title: "Precondition Failed",
                        desc: "One or more of the preconditions given in the request header fields evaluated to false when tested on the server."
                    },
                    {
                        code: 413,
                        title: "Payload Too Large",
                        desc: "The server is refusing to process the request because the request entity is larger than the server is willing or able to process."
                    },
                    {
                        code: 414,
                        title: "URI Too Long",
                        desc: "The URI provided in the request is too long."
                    },
                    {
                        code: 415,
                        title: "Unsupported Media Type",
                        desc: "The server refuses to service the request because the entity of the request is in a format not supported by the server."
                    },
                    {
                        code: 416,
                        title: "Range Not Satisfiable",
                        desc: "The client has asked for a portion of the file, but the server cannot provide that portion."
                    },
                    {
                        code: 417,
                        title: "Expectation Failed",
                        desc: "The server cannot meet the expectations given in the Expect request header."
                    },
                    {
                        code: 418,
                        title: "I'm a Teapot",
                        desc: "The server refuses the attempt to brew coffee with a teapot."
                    },
                    {
                        code: 421,
                        title: "Misdirected Request",
                        desc: "The request was directed to a server that is not able to produce a response."
                    },
                    {
                        code: 422,
                        title: "Unprocessable Entity",
                        desc: "The server understands the content type of the request entity, and the syntax of the request entity is correct, but was unable to process the contained instructions."
                    },
                    {
                        code: 423,
                        title: "Locked",
                        desc: "The resource that is being accessed is locked."
                    },
                    {
                        code: 424,
                        title: "Failed Dependency",
                        desc: "The request failed because it depended on another request that failed."
                    },
                    {
                        code: 425,
                        title: "Too Early",
                        desc: "The server is unwilling to process the request until a later time."
                    },
                    {
                        code: 426,
                        title: "Upgrade Required",
                        desc: "The server requires the client to upgrade to a higher protocol version before proceeding."
                    },
                    {
                        code: 428,
                        title: "Precondition Required",
                        desc: "The server requires the request to be conditional."
                    },
                    {
                        code: 429,
                        title: "Too Many Requests",
                        desc: "The user has sent too many requests in a given amount of time ('rate limiting')."
                    },
                    {
                        code: 431,
                        title: "Request Header Fields Too Large",
                        desc: "The server is unwilling to process the request because the size of the request header fields exceeds the server's capacity."
                    },
                    {
                        code: 451,
                        title: "Unavailable For Legal Reasons",
                        desc: "The user cannot access the requested resource due to legal reasons."
                    }
                ]
            },
            {
                title: "5xx",
                desc: "Server Error",
                codes: [
                    {
                        code: 500,
                        title: "Internal Server Error",
                        desc: "The server encountered an unexpected condition that prevented it from fulfilling the request."
                    },
                    {
                        code: 501,
                        title: "Not Implemented",
                        desc: "The server does not support the functionality required to fulfill the request."
                    },
                    {
                        code: 502,
                        title: "Bad Gateway",
                        desc: "The server, while acting as a gateway or proxy, received an invalid response from an upstream server."
                    },
                    {
                        code: 503,
                        title: "Service Unavailable",
                        desc: "The server is currently unable to handle the request due to a temporary overload or scheduled maintenance."
                    },
                    {
                        code: 504,
                        title: "Gateway Timeout",
                        desc: "The server, while acting as a gateway or proxy, did not receive a timely response from an upstream server."
                    },
                    {
                        code: 505,
                        title: "HTTP Version Not Supported",
                        desc: "The server does not support, or refuses to support, the HTTP protocol version that was used in the request."
                    },
                    {
                        code: 506,
                        title: "Variant Also Negotiates",
                        desc: "Transparent content negotiation for the request results in a circular reference."
                    },
                    {
                        code: 507,
                        title: "Insufficient Storage",
                        desc: "The server is unable to store the representation needed to complete the request."
                    },
                    {
                        code: 508,
                        title: "Loop Detected",
                        desc: "The server detected an infinite loop while processing the request."
                    },
                    {
                        code: 510,
                        title: "Not Extended",
                        desc: "Further extensions to the request are required for the server to fulfill it."
                    },
                    {
                        code: 511,
                        title: "Network Authentication Required",
                        desc: "The client needs to authenticate to gain network access."
                    }
                ]
            }
        ]
    }
};
