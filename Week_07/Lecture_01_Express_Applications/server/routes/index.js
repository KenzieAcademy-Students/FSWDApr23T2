/**
 * Importing the Router function from express
 */
import { Router } from "express";

/**
 * Then, use the Router() function to declare an express router
 */
const router = Router();

/**
 * All Requests forwarded to this router contain URL's starting with
 * "/api"
 */

/**
 * To create an endpoint, declare the URL through the use of the
 * router.route() method
 */
router
  .route("/")
  /**
   * This is an endpoint that handles HTTP GET requests sent to
   * localhost:8080/api
   *
   * To determine what should be done when said request is received,
   * we must pass in a request handler function.
   */
  .get((request, response) => {
    /**
     * When defining a GET route, you most likely will not
     * need to access the request object (i.e. the first parameter
     * of this function). Situations where the request object will
     * be needed:
     *  - GET requests to a URL with a route parameter
     *  - GET requests to a URL with query strings
     */

    /**
     * In order to send a response back to where the request
     * came from, you will need to use the response object (i.e.
     * the second parameter of this function).
     *
     * Responses can be sent in a number of ways. For this, we'll send
     * a simple response through the use of the .send() method.
     */
    response.send("Ok");
  });

/**
 * Export the router so it can be imported into the app itself
 */
export default router;
