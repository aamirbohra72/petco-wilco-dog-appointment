<template>

<footer class="footer">
      <div class="container">
        <div class="footer-content">
          <!-- Orders Section -->
          <div class="footer-column">
            <h3>ORDERS</h3>
            <ul>
              <li><a href="#">Shipping Rates</a></li>
              <li><a href="#">Track Order</a></li>
              <li><a href="#">Manage Your Account</a></li>
              <li><a href="#">Gift Cards</a></li>
            </ul>
          </div>

          <!-- Store Hours Section -->
          <div class="footer-column">
            <h3>STORE HOURS</h3>
            <p>Monday - Saturday 8am-8pm</p>
            <p>Sunday 9am - 6pm</p>
          </div>

          <!-- Store Location Section -->
          <div class="footer-column store-location">
            <h3>YOUR LOCAL WILCO FARM STORE</h3>
            <div class="store-map">
              <div class="placeholder-map"></div>
            </div>
            <p>1900 N Westwood Blvd</p>
            <p>Anytown, CA 90210</p>
            <p>Call To Order:</p>
            <p>(555) 555-5555</p>
            <button class="get-directions-btn">GET DIRECTIONS TO NEAREST WILCO STORE</button>
            <p class="small-text">For help with online orders call (888) TRY-WILCO</p>
          </div>

          <!-- Customer Service Section -->
          <div class="footer-column">
            <h3>CUSTOMER SERVICE</h3>
            <ul>
              <li><a href="#">Let's Contact Page</a></li>
              <li><a href="#">Store Feedback</a></li>
              <li><a href="#">Store Pick Up FAQ</a></li>
              <li><a href="#">Defender Program</a></li>
              <li><a href="#">Coop Terms & Conditions</a></li>
              <li><a href="#">Check Status</a></li>
            </ul>
          </div>

          <!-- Company Section -->
          <div class="footer-column">
            <h3>COMPANY</h3>
            <ul>
              <li><a href="#">About Wilco</a></li>
              <li><a href="#">FFA Forever</a></li>
              <li><a href="#">Core Values & Strategies</a></li>
              <li><a href="#">Learn About Wilco</a></li>
            </ul>
          </div>

          <!-- Events Section -->
          <div class="footer-column">
            <h3>EVENTS</h3>
            <div class="event-item">
              <div class="event-date">
                <span class="month">MAR</span>
                <span class="day">16</span>
              </div>
              <div class="event-info">
                <a href="#">Spring Gardening Weekend</a>
              </div>
            </div>
            <div class="event-item">
              <div class="event-date">
                <span class="month">APR</span>
                <span class="day">20</span>
              </div>
              <div class="event-info">
                <a href="#">Annual Anniversary Sale</a>
              </div>
            </div>
          </div>
        </div>

        <!-- Bottom Footer -->
        <div class="bottom-footer">
          <div class="questions-section">
            <p>Questions About a Recent Online Order? Call (888) TRY-WILCO</p>
          </div>
          <div class="footer-logo">
            <h2 class="text-logo">Wilco</h2>
          </div>
          <div class="footer-links">
            <a href="#">Privacy Policy</a> | <a href="#">Return Policy</a> |
            <a href="#">Accessibility Policy</a>
          </div>
          <div class="copyright">
            <p>
              © 2023 Wilco. All rights reserved. All trademarks are the property of their respective
              owners.
            </p>
          </div>
        </div>
      </div>
    </footer>
</template>

<style scoped>
/* Base Styles */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: Arial, sans-serif;
  line-height: 1.6;
  color: #333;
}

.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
}

a {
  text-decoration: none;
  color: #0056b3;
}

.footer {
  background-color: #f5f5f5;
  padding: 40px 0 20px;
  border-top: 1px solid #ddd;
}

.footer-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 30px;
}

.footer-column h3 {
  color: #003b5c;
  margin-bottom: 15px;
  font-size: 16px;
}

.footer-column ul {
  list-style: none;
}

.footer-column ul li {
  margin-bottom: 8px;
}

.footer-column ul li a {
  color: #666;
  font-size: 14px;
}

.store-location p {
  margin-bottom: 5px;
  font-size: 14px;
}

.placeholder-map {
  width: 100%;
  height: 150px;
  background-color: #f0f0f0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #999;
  font-size: 14px;
  margin-bottom: 10px;
}

.placeholder-map::after {
  content: "Store Location Map";
}

.get-directions-btn {
  background-color: #003b5c;
  color: white;
  border: none;
  padding: 8px 12px;
  border-radius: 4px;
  cursor: pointer;
  margin: 10px 0;
  font-size: 12px;
}

.small-text {
  font-size: 12px;
  color: #888;
}

.event-item {
  display: flex;
  margin-bottom: 15px;
}

.event-date {
  background-color: #003b5c;
  color: white;
  padding: 5px;
  text-align: center;
  min-width: 40px;
  border-radius: 4px;
  margin-right: 10px;
}

.event-date .month {
  display: block;
  font-size: 12px;
}

.event-date .day {
  display: block;
  font-size: 16px;
  font-weight: bold;
}

.event-info {
  font-size: 14px;
}

.bottom-footer {
  margin-top: 30px;
  padding-top: 20px;
  border-top: 1px solid #ddd;
  text-align: center;
}

.questions-section {
  margin-bottom: 15px;
}

.footer-links {
  margin-bottom: 10px;
  font-size: 14px;
}

.copyright {
  font-size: 12px;
  color: #888;
}
</style>