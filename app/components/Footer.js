import facebook from '../assets/icons/facebook.svg';
import twitter from '../assets/icons/twitter.svg';
import princeton from '../assets/icons/princeton.svg';
import friends from '../assets/icons/friends.svg';

export default {
  name: 'Header',
  template: `
    <footer class="text-center text-lg-start bg-light text-muted mt-5">
      <div class="container">
        <div class="row">
          <div class="col-md-3 mt-3">
            <a class="text-reset text-decoration-none fw-bold" href="https://library.princeton.edu/research">Research Tools</a>
            <ul class="link-list">
              <li class="mt-1">
                <a class="text-reset text-decoration-none" href="https://dss.princeton.edu/">Data and Statistics</a>
              </li>
              <li class="mt-0">
                <a class="text-reset text-decoration-none" href="https://library.princeton.edu/research/databases">Databases</a>
              </li>
              <li class="mt-0">
                <a class="text-reset text-decoration-none" href="https://catalog.princeton.edu/?f%5Baccess_facet%5D%5B%5D=Online&f%5Bformat%5D%5B%5D=Journal">E-journals</a>
              </li>
              <li class="mt-0">
                <a class="text-reset text-decoration-none" href="https://library.princeton.edu/library-guides">Research Guides</a>
              </li>
              <li class="mt-0">
                <a class="text-reset text-decoration-none" href="https://catalog.princeton.edu/">Catalog</a>
              </li>
              <li class="mt-0">
                <a class="text-reset text-decoration-none" href="https://library.princeton.edu/databases/subject/special-collections">Special Collections</a>
              </li>
            </ul>
          </div>
          <div class="col-md-3 mt-3">
            <a class="text-reset text-decoration-none fw-bold" href="https://library.princeton.edu/services">Library Services</a>
            <ul class="link-list">
              <li class="mt-0">
                <a class="text-reset text-decoration-none" href="https://library.princeton.edu/services/article-express">Article Express</a>
              </li>
              <li class="mt-0">
                <a class="text-reset text-decoration-none" href="https://library.princeton.edu/services/borrowdirect">Borrow Direct</a>
              </li>
              <li class="mt-0">
                <a class="text-reset text-decoration-none" href="https://library.princeton.edu/services/access/circulation-policies">Circulation</a>
              </li>
              <li class="mt-0">
                <a class="text-reset text-decoration-none" href="https://library.princeton.edu/services/reserves">Course Reserves</a>
              </li>
              <li class="mt-0">
                <a class="text-reset text-decoration-none" href="https://library.princeton.edu/services/interlibrary-services">Interlibrary Loan (ILL)</a>
              </li>
              <li class="mt-0">
                <a class="text-reset text-decoration-none" href="https://library.princeton.edu/services/access">Library Access</a>
              </li>
              <li class="mt-0">
                <a class="text-reset text-decoration-none" href="https://library.princeton.edu/services/study-spaces">Study Spaces and Lockers</a>
              </li>
              <li class="mt-0">
                <a class="text-reset text-decoration-none" href="https://library.princeton.edu/help/trace-materials">Trace a Book</a>
              </li>
              <li class="mt-0">
                <a class="text-reset text-decoration-none" href="https://library.princeton.edu/accounts">Your Accounts</a>
              </li>
            </ul>
          </div>
          <div class="col-md-3 mt-3">
            <a class="text-reset text-decoration-none fw-bold" href="https://library.princeton.edu/about">About the Library</a>
            <ul class="link-list">
              <li class="mt-0">
                <a class="text-reset text-decoration-none" href="https://library.princeton.edu/collections-and-collection-development">Collections and Collecting</a>
              </li>
              <li class="mt-0">
                <a class="text-reset text-decoration-none" href="https://rbsc.princeton.edu/exhibitions">Exhibitions</a>
              </li>
              <li class="mt-0">
                <a class="text-reset text-decoration-none" href="https://library.princeton.edu/about/locations">Library Locations</a>
              </li>
              <li class="mt-0">
                <a class="text-reset text-decoration-none" href="https://library.princeton.edu/alumni">For Alumni</a>
              </li>
              <li class="mt-0">
                <a class="text-reset text-decoration-none" href="https://library.princeton.edu/staff">For Library Staff</a>
              </li>
              <li class="mt-0">
                <a class="text-reset text-decoration-none" href="https://library.princeton.edu/staff/directory">Staff Directory</a>
              </li>
              <li class="mt-0">
                <a class="text-reset text-decoration-none" href="https://library.princeton.edu/about/friends">Friends of the Library</a>
              </li>
              <li class="mt-0">
                <a class="text-reset text-decoration-none" href="https://library.princeton.edu/services/technology/off-campus-access">Using the Library Off-Campus</a>
              </li>
            </ul>
          </div>
          <div class="col-md-3 mt-3">
            <h6 class="fw-bold" href="https://library.princeton.edu/about">Princeton University Library</h6>
            <ul class="link-list">
              <li class="mt-0">
                <a class="text-reset text-decoration-none" href="https://library.princeton.edu/collections-and-collection-development">Collections and Collecting</a>
              </li>
              <li>
                <span>One Washington Road</span>
                <br>
                <span>Princeton, NJ 08544 USA</span>
              </li>
              <li>
                <a class="footer-icon" href="https://www.facebook.com/PULibrary">
                  <img alt="Facebook" :src="facebook">
                </a>
                <a class="footer-icon" href="http://twitter.com/PULibrary">
                  <img alt="Twitter" :src="twitter">
                </a>
                <a class="footer-icon" href="https://libguides.princeton.edu/usgovdocs">
                  <img alt="Government Documents Depository" :src="princeton">
                </a>
                <a class="footer-icon" href="">
                  <img alt="Friends of the Library" :src="friends">
                </a>
              </li>
              <li>
                <span>© 2023 The Trustees of Princeton University</span>
              </li>
              <li>
                <a href="https://accessibility.princeton.edu/" class="text-reset text-decoration-none">Accessibility</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>`,
  data() {
    return {
      facebook: facebook,
      twitter: twitter,
      princeton: princeton,
      friends: friends
    };
  }
};
