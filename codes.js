exports.codes = {
	"100" : {
		minidef: "Continue",
		maxidef: "This means that the server has received the request headers, and that the client should proceed to send the request body (in the case of a request for which a body needs to be sent; for example, a POST request). If the request body is large, sending it to a server when a request has already been rejected based upon inappropriate headers is inefficient. To have a server check if the request could be accepted based on the request's headers alone, a client must send Expect: 100-continue as a header in its initial request and check if a 100 Continue status code is received in response before continuing (or receive 417 Expectation Failed and not continue)."
	},
	"101" : {
		minidef: "Switching Protocols",
		maxidef: "This means the requester has asked the server to switch protocols and the server is acknowledging that it will do so."
	},
	"102" : {
		minidef: "Processing (WebDAV; RFC 2518)",
		maxidef: "As a WebDAV request may contain many sub-requests involving file operations, it may take a long time to complete the request. This code indicates that the server has received and is processing the request, but no response is available yet.This prevents the client from timing out and assuming the request was lost."
	},
	"200" : {
		minidef: "OK",
		maxidef: "Standard response for successful HTTP requests. The actual response will depend on the request method used. In a GET request, the response will contain an entity corresponding to the requested resource. In a POST request, the response will contain an entity describing or containing the result of the action."
	},
	"201" : {
		minidef: "Created",
		maxidef: "The request has been fulfilled and resulted in a new resource being created."
	},
	"202" : {
		minidef: "Accepted",
		maxidef: "The request has been accepted for processing, but the processing has not been completed. The request might or might not eventually be acted upon, as it might be disallowed when processing actually takes place."
	},
	"203" : {
		minidef: "Non-Authoritative Information (since HTTP/1.1)",
		maxidef: "The server successfully processed the request, but is returning information that may be from another source."
	},
	"204" : {
		minidef: "No Content",
		maxidef: "The server successfully processed the request, but is not returning any content. Usually used as a response to a successful delete request."
	},
	"205" : {
		minidef: "Reset Content",
		maxidef: "The server successfully processed the request, but is not returning any content. Unlike a 204 response, this response requires that the requester reset the document view."
	},
	"206" : {
		minidef: "Partial Content (RFC 7233)",
		maxidef: "The server is delivering only part of the resource (byte serving) due to a range header sent by the client. The range header is used by tools like wget to enable resuming of interrupted downloads, or split a download into multiple simultaneous streams."
	},
	"207" : {
		minidef: "Multi-Status (WebDAV; RFC 4918)",
		maxidef: "The message body that follows is an XML message and can contain a number of separate response codes, depending on how many sub-requests were made."
	},
	"208" : {
		minidef: "Already Reported (WebDAV; RFC 5842)",
		maxidef: "The members of a DAV binding have already been enumerated in a previous reply to this request, and are not being included again."
	},
	"226" : {
		minidef: "IM Used (RFC 3229)",
		maxidef: "The server has fulfilled a request for the resource, and the response is a representation of the result of one or more instance-manipulations applied to the current instance."
	},
	"300" : {
		minidef: "Multiple Choices",
		maxidef: "Indicates multiple options for the resource that the client may follow. It, for instance, could be used to present different format options for video, list files with different extensions, or word sense disambiguation."
	},
	"301" : {
		minidef: "Moved Permanently",
		maxidef: "This and all future requests should be directed to the given URI."
	},
	"302" : {
		minidef: "Found",
		maxidef: "his is an example of industry practice contradicting the standard. The HTTP/1.0 specification (RFC 1945) required the client to perform a temporary redirect (the original describing phrase was \"Moved Temporarily\"),but popular browsers implemented 302 with the functionality of a 303 See Other. Therefore, HTTP/1.1 added status codes 303 and 307 to distinguish between the two behaviours.However, some Web applications and frameworks use the 302 status code as if it were the 303."
	},
	"303" : {
		minidef: "See Other (since HTTP/1.1)",
		maxidef: "The response to the request can be found under another URI using a GET method. When received in response to a POST (or PUT/DELETE), it should be assumed that the server has received the data and the redirect should be issued with a separate GET message."
	},
	"304" : {
		minidef: "Not Modified (RFC 7232)",
		maxidef: "Indicates that the resource has not been modified since the version specified by the request headers If-Modified-Since or If-None-Match. This means that there is no need to retransmit the resource, since the client still has a previously-downloaded copy."
	},
	"305" : {
		minidef: "Use Proxy (since HTTP/1.1)",
		maxidef: "The requested resource is only available through a proxy, whose address is provided in the response. Many HTTP clients (such as Mozilla and Internet Explorer) do not correctly handle responses with this status code, primarily for security reasons."
	},
	"306" : {
		minidef: "Switch Proxy",
		maxidef: "No longer used. Originally meant \"Subsequent requests should use the specified proxy.\""
	},
	"307" : {
		minidef: "Temporary Redirect (since HTTP/1.1)",
		maxidef: "In this case, the request should be repeated with another URI; however, future requests should still use the original URI. In contrast to how 302 was historically implemented, the request method is not allowed to be changed when reissuing the original request. For instance, a POST request should be repeated using another POST request."
	},
	"308" : {
		minidef: "Permanent Redirect (RFC 7538)",
		maxidef: "The request, and all future requests should be repeated using another URI. 307 and 308 (as proposed) parallel the behaviours of 302 and 301, but do not allow the HTTP method to change. So, for example, submitting a form to a permanently redirected resource may continue smoothly."
	},
	"400" : {
		minidef: "Bad Request",
		maxidef: "The server cannot or will not process the request due to something that is perceived to be a client error (e.g., malformed request syntax, invalid request message framing, or deceptive request routing)."
	},
	"401" : {
		minidef: "Unauthorized (RFC 7235)",
		maxidef: "Similar to 403 Forbidden, but specifically for use when authentication is required and has failed or has not yet been provided. The response must include a WWW-Authenticate header field containing a challenge applicable to the requested resource. See Basic access authentication and Digest access authentication."
	},
	"402" : {
		minidef: "Payment Required",
		maxidef: "Reserved for future use. The original intention was that this code might be used as part of some form of digital cash or micropayment scheme, but that has not happened, and this code is not usually used. YouTube uses this status if a particular IP address has made excessive requests, and requires the person to enter a CAPTCHA."
	},
	"403" : {
		minidef: "Forbidden",
		maxidef: "The request was a valid request, but the server is refusing to respond to it. Unlike a 401 Unauthorized response, authenticating will make no difference."
	},
	"404" : {
		minidef: "Not Found",
		maxidef: "The requested resource could not be found but may be available again in the future. Subsequent requests by the client are permissible."
	},
	"405" : {
		minidef: "Method Not Allowed",
		maxidef: "A request was made of a resource using a request method not supported by that resource; for example, using GET on a form which requires data to be presented via POST, or using PUT on a read-only resource."
	},
	"406" : {
		minidef: "Not Acceptable",
		maxidef: "The requested resource is only capable of generating content not acceptable according to the Accept headers sent in the request."
	},
	"407" : {
		minidef: "Proxy Authentication Required (RFC 7235)",
		maxidef: "The client must first authenticate itself with the proxy."
	},
	"408" : {
		minidef: "Request Timeout",
		maxidef: "The server timed out waiting for the request. According to HTTP specifications: \"The client did not produce a request within the time that the server was prepared to wait. The client MAY repeat the request without modifications at any later time.\""
	},
	"409" : {
		minidef: "Conflict",
		maxidef: "Indicates that the request could not be processed because of conflict in the request, such as an edit conflict in the case of multiple updates."
	},
	"410" : {
		minidef: "Gone",
		maxidef: "Indicates that the resource requested is no longer available and will not be available again. This should be used when a resource has been intentionally removed and the resource should be purged. Upon receiving a 410 status code, the client should not request the resource again in the future. Clients such as search engines should remove the resource from their indices. Most use cases do not require clients and search engines to purge the resource, and a \"404 Not Found\" may be used instead."
	},
	"411" : {
		minidef: "Length Required",
		maxidef: "The request did not specify the length of its content, which is required by the requested resource."
	},
	"412" : {
		minidef: "Precondition Failed (RFC 7232)",
		maxidef: "The server does not meet one of the preconditions that the requester put on the request."
	},
	"413" : {
		minidef: "Request Entity Too Large",
		maxidef: "The request is larger than the server is willing or able to process."
	},
	"414" : {
		minidef: "Request-URI Too Long",
		maxidef: "The URI provided was too long for the server to process. Often the result of too much data being encoded as a query-string of a GET request, in which case it should be converted to a POST request."
	},
	"415" : {
		minidef: "Unsupported Media Type",
		maxidef: "The request entity has a media type which the server or resource does not support. For example, the client uploads an image as image/svg+xml, but the server requires that images use a different format."
	},
	"416" : {
		minidef: "Requested Range Not Satisfiable (RFC 7233)",
		maxidef: "The client has asked for a portion of the file (byte serving), but the server cannot supply that portion. For example, if the client asked for a part of the file that lies beyond the end of the file."
	},
	"417" : {
		minidef: "Expectation Failed",
		maxidef: "The server cannot meet the requirements of the Expect request-header field."
	},
	"418" : {
		minidef: "I'm a teapot (RFC 2324)",
		maxidef: "This code was defined in 1998 as one of the traditional IETF April Fools' jokes, in RFC 2324, Hyper Text Coffee Pot Control Protocol, and is not expected to be implemented by actual HTTP servers. The RFC specifies this code should be returned by tea pots requested to brew coffee."
	},
	"419" : {
		minidef: "Authentication Timeout (not in RFC 2616)",
		maxidef: "Not a part of the HTTP standard, 419 Authentication Timeout denotes that previously valid authentication has expired. It is used as an alternative to 401 Unauthorized in order to differentiate from otherwise authenticated clients being denied access to specific server resources."
	},
	"420" : {
		minidef: "Method Failure (Spring Framework)",
		maxidef: "Not part of the HTTP standard, but defined by Spring in the HttpStatus class to be used when a method failed. This status code is deprecated by Spring."
	},
	"421" : {
		minidef: "Misdirected Request (HTTP/2)",
		maxidef: "The request was directed at a server that is not able to produce a response (for example because a connection reuse)."
	},
	"422" : {
		minidef: "Unprocessable Entity (WebDAV; RFC 4918)",
		maxidef: "The request was well-formed but was unable to be followed due to semantic errors."
	},
	"423" : {
		minidef: "Locked (WebDAV; RFC 4918)",
		maxidef: "The resource that is being accessed is locked."
	},
	"424" : {
		minidef: "Failed Dependency (WebDAV; RFC 4918)",
		maxidef: "The request failed due to failure of a previous request (e.g., a PROPPATCH)."
	},
	"426" : {
		minidef: "Upgrade Required",
		maxidef: "The client should switch to a different protocol such as TLS/1.0, given in the Upgrade header field."
	},
	"428" : {
		minidef: "Precondition Required (RFC 6585)",
		maxidef: "The origin server requires the request to be conditional. Intended to prevent \"the 'lost update' problem, where a client GETs a resource's state, modifies it, and PUTs it back to the server, when meanwhile a third party has modified the state on the server, leading to a conflict.\""
	},
	"429" : {
		minidef: "Too Many Requests (RFC 6585)",
		maxidef: "The user has sent too many requests in a given amount of time. Intended for use with rate limiting schemes."
	},
	"431" : {
		minidef: "Request Header Fields Too Large (RFC 6585)",
		maxidef: "The server is unwilling to process the request because either an individual header field, or all the header fields collectively, are too large."
	},
	"440" : {
		minidef: "Login Timeout (Microsoft)",
		maxidef: "A Microsoft extension. Indicates that your session has expired."
	},
	"444" : {
		minidef: "No Response (Nginx)",
		maxidef: "Used in Nginx logs to indicate that the server has returned no information to the client and closed the connection (useful as a deterrent for malware)."
	},
	"449" : {
		minidef: "Retry With (Microsoft)",
		maxidef: "A Microsoft extension. The request should be retried after performing the appropriate action."
	},
	"450" : {
		minidef: "Blocked by Windows Parental Controls (Microsoft)",
		maxidef: "A Microsoft extension. This error is given when Windows Parental Controls are turned on and are blocking access to the given webpage."
	},
	"451" : {
		minidef: "Unavailable For Legal Reasons (Internet draft)",
		maxidef: "Defined in the internet draft \"A New HTTP Status Code for Legally-restricted Resources\". Intended to be used when resource access is denied for legal reasons, e.g. censorship or government-mandated blocked access. A reference to the 1953 dystopian novel Fahrenheit 451, where books are outlawed."
	},
	"494" : {
		minidef: "Request Header Too Large (Nginx)",
		maxidef: "Nginx internal code similar to 431 but it was introduced earlier in version 0.9.4 (on January 21, 2011)."
	},
	"495" : {
		minidef: "Cert Error (Nginx)",
		maxidef: "Nginx internal code used when SSL client certificate error occurred to distinguish it from 4XX in a log and an error page redirection."
	},
	"496" : {
		minidef: "No Cert (Nginx)",
		maxidef: "Nginx internal code used when client didn't provide certificate to distinguish it from 4XX in a log and an error page redirection."
	},
	"497" : {
		minidef: "HTTP to HTTPS (Nginx)",
		maxidef: "Nginx internal code used for the plain HTTP requests that are sent to HTTPS port to distinguish it from 4XX in a log and an error page redirection."
	},
	"498" : {
		minidef: "Token expired/invalid (Esri)",
		maxidef: "Returned by ArcGIS for Server. A code of 498 indicates an expired or otherwise invalid token."
	},
	"499" : {
		minidef: "Client Closed Request (Nginx)",
		maxidef: "Used in Nginx logs to indicate when the connection has been closed by client while the server is still processing its request, making server unable to send a status code back."
	},
	"500" : {
		minidef: "Internal Server Error",
		maxidef: "A generic error message, given when an unexpected condition was encountered and no more specific message is suitable."
	},
	"501" : {
		minidef: "Not Implemented",
		maxidef: "The server either does not recognize the request method, or it lacks the ability to fulfil the request. Usually this implies future availability (e.g., a new feature of a web-service API)."
	},
	"502" : {
		minidef: "Bad Gateway",
		maxidef: "The server was acting as a gateway or proxy and received an invalid response from the upstream server."
	},
	"503" : {
		minidef: "Service Unavailable",
		maxidef: "The server is currently unavailable (because it is overloaded or down for maintenance). Generally, this is a temporary state."
	},
	"504" : {
		minidef: "Gateway Timeout",
		maxidef: "The server was acting as a gateway or proxy and did not receive a timely response from the upstream server."
	},
	"505" : {
		minidef: "HTTP Version Not Supported",
		maxidef: "The server does not support the HTTP protocol version used in the request."
	},
	"506" : {
		minidef: "Variant Also Negotiates (RFC 2295)",
		maxidef: "Transparent content negotiation for the request results in a circular reference."
	},
	"507" : {
		minidef: "Insufficient Storage (WebDAV; RFC 4918)",
		maxidef: "The server is unable to store the representation needed to complete the request."
	},
	"508" : {
		minidef: "Loop Detected (WebDAV; RFC 5842)",
		maxidef: "The server detected an infinite loop while processing the request (sent in lieu of 208 Already Reported)."
	},
	"509" : {
		minidef: "Bandwidth Limit Exceeded (Apache bw/limited extension)",
		maxidef: "This status code is not specified in any RFCs. Its use is unknown."
	},
	"510" : {
		minidef: "Not Extended (RFC 2774)",
		maxidef: "Further extensions to the request are required for the server to fulfil it."
	},
	"511" : {
		minidef: "Network Authentication Required (RFC 6585)",
		maxidef: "The client needs to authenticate to gain network access. Intended for use by intercepting proxies used to control access to the network (e.g., \"captive portals\" used to require agreement to Terms of Service before granting full Internet access via a Wi-Fi hotspot)."
	},
	"520" : {
		minidef: "Unknown Error",
		maxidef: "This status code is not specified in any RFC and is returned by certain services, for instance Microsoft Azure and Cloudflare servers: \"The 520 error is essentially a “catch-all” response for when the origin server returns something unexpected or something that is not tolerated/interpreted (protocol violation or empty response).\""
	},
	"598" : {
		minidef: "Network read timeout error (Unknown)",
		maxidef: "This status code is not specified in any RFCs, but is used by Microsoft HTTP proxies to signal a network read timeout behind the proxy to a client in front of the proxy."
	},
	"599" : {
		minidef: "Network connect timeout error (Unknown)",
		maxidef: "This status code is not specified in any RFCs, but is used by Microsoft HTTP proxies to signal a network connect timeout behind the proxy to a client in front of the proxy."
	}
	
}
