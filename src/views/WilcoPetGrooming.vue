
<template>
  <div class="wilco-grooming">
    <!-- Header -->
    <!-- <header class="header">
      <div class="container">
        <div class="header-content">
          <div class="search-bar">
            <input type="text" placeholder="Search Your Items" />
            <button class="search-button">
              <i class="search-icon"></i>
            </button>
          </div>

          <div class="logo">
            <img src="@/assets/wilco.png" alt="Wilco Logo" class="logo-img" />
          </div>

          <div class="nav-links">
            <a href="#">LOGIN</a>
            <span class="divider">/</span>
            <a href="#">REGISTER</a>
            <a href="#" class="cart-icon">
              <span class="cart-count">0</span>
            </a>
          </div>
        </div>
      </div>
    </header>  -->
    <HeaderTop />
    

    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-content">
        <div class="hero-text">
          <h1>WILCO GROOMING IS READY TO PAMPER YOUR PETS</h1>
          <p>
            CALL TO BOOK AN APPOINTMENT OR SCHEDULE ONLINE. CHOOSE A WILCO LOCATION NEAR YOU AND
            LINKED IT TO YOUR IN-STORE WILCO FAMILY REWARDS.
          </p>
        </div>
      </div>
    </section>

    <!-- Booking CTA -->
    <section class="booking-cta">
      <div class="container">
        <div class="booking-box">
          <h2>Want to book a grooming appointment online?</h2>
          <p>
            Pair your Farmstore.com account to your Wilco Family Rewards number.
            <a href="#" class="cta-link">Click HERE to learn more</a>
          </p>
        </div>
      </div>
    </section>

    <!-- Services Section -->
    <section class="services">
      <div class="container">
        <h2 class="section-title">OUR SERVICES</h2>

        <div class="services-grid">
          <!-- Service Card 1 -->
          <div class="service-card">
            <div class="service-image">
              <!-- Using div with background instead of img -->
              <div class="placeholder-image"></div>
            </div>
            <div class="service-content">
              <h3>Rabies Vaccination Required</h3>
              <p>
                For the safety of all of our furry guests and our groomers, proof of a current
                rabies vaccination must be on file with us before your pet's grooming appointment
                can be provided.
              </p>
            </div>
          </div>

          <!-- Service Card 2 -->
          <div class="service-card">
            <div class="service-image">
              <div class="placeholder-image"></div>
            </div>
            <div class="service-content">
              <h3>De-Shed</h3>
              <p>
                If your breed sheds and needs assistance with excess hair, we recommend a de-shed
                service. Using a special line of products designed to release the undercoat, we can
                significantly reduce your dog's shedding issues.
              </p>
            </div>
          </div>

          <!-- Service Card 3 -->
          <div class="service-card">
            <div class="service-image">
              <div class="placeholder-image"></div>
            </div>
            <div class="service-content">
              <h3>Facial</h3>
              <p>
                For pets experiencing tear stains or facial discoloration, a facial treatment can
                help group and is soothing to your pet. This service is included with all dog
                grooms.
              </p>
            </div>
          </div>

          <!-- Service Card 4 -->
          <div class="service-card">
            <div class="service-image">
              <div class="placeholder-image"></div>
            </div>
            <div class="service-content">
              <h3>Shampoos & Conditioners</h3>
              <p>
                Based on the needs of your pet, several shampoo and conditioner options are
                available. We have special medicated shampoos for skin problems to hypoallergenic
                options for sensitive puppies to flea dips.
              </p>
            </div>
          </div>

          <!-- Service Card 5 -->
          <div class="service-card">
            <div class="service-image">
              <div class="placeholder-image"></div>
            </div>
            <div class="service-content">
              <h3>Flea Treatment</h3>
              <p>We can remove flea infestations with gentle yet effective ingredients.</p>
            </div>
          </div>

          <!-- Service Card 6 -->
          <div class="service-card">
            <div class="service-image">
              <div class="placeholder-image"></div>
            </div>
            <div class="service-content">
              <h3>De-Skunk</h3>
              <p>
                Did your dog have an encounter with a skunk? We have special products and procedures
                to remove the odor and restore your pet to its fresh-smelling self.
              </p>
            </div>
          </div>

          <!-- Service Card 7 -->
          <div class="service-card">
            <div class="service-image">
              <div class="placeholder-image"></div>
            </div>
            <div class="service-content">
              <h3>Hand Scissoring</h3>
              <p>
                For breeds that require detailed hand scissoring or for owners who prefer the look
                of hand scissoring, we can take your pet's coat to another level with hand
                scissoring.
              </p>
            </div>
          </div>

          <!-- Service Card 8 -->
          <div class="service-card">
            <div class="service-image">
              <div class="placeholder-image"></div>
            </div>
            <div class="service-content">
              <h3>Brush Out</h3>
              <p>
                A little help with brushing can go a long way for dogs with longer coats. We can
                help your pet's coat stay in better shape in between grooms.
              </p>
            </div>
          </div>

          <!-- Service Card 9 -->
          <div class="service-card">
            <div class="service-image">
              <div class="placeholder-image"></div>
            </div>
            <div class="service-content">
              <h3>Nails</h3>
              <p>
                We can help with your pet's nails, which can be uncomfortable or even painful if
                they get too long. Included with all grooms.
              </p>
            </div>
          </div>

          <!-- Service Card 10 -->
          <div class="service-card">
            <div class="service-image">
              <div class="placeholder-image"></div>
            </div>
            <div class="service-content">
              <h3>Dremeling of Nails</h3>
              <p>
                This service provides a smooth finish to your dog's nails and will help minimize
                scratching. Dremeling is included with all grooms, but can be added to nail trim for
                an additional charge.
              </p>
            </div>
          </div>

          <!-- Service Card 11 -->
          <div class="service-card">
            <div class="service-image">
              <div class="placeholder-image"></div>
            </div>
            <div class="service-content">
              <h3>Teeth Brushing</h3>
              <p>
                Good oral health is essential for your pet too. Add on teeth brushing to any full
                groom service.
              </p>
            </div>
          </div>

          <!-- Service Card 12 -->
          <div class="service-card">
            <div class="service-image">
              <div class="placeholder-image"></div>
            </div>
            <div class="service-content">
              <h3>Ears Cleaned / Plucked</h3>
              <p>
                Depending on your breed's needs, we can clean and pluck the excess hair from your
                pet's ears to prevent infection.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Additional Info Section -->
    <section class="additional-info">
      <div class="container">
        <p>
          If you would like your pet to be groomed regularly with the groomer working through this,
          it is advised we can provide for an additional cost. We, if you require a longer period
          for grooming, immediately you guarantee to complete the groom, we must charge for the
          additional time. Please note that all pets must be up to date with their vaccinations and
          in good health and current on rabies vaccinations for all appointments and walk-in
          services.
        </p>
      </div>
    </section>

    <!-- Footer -->
     <FooterBottom/>
   
  </div>
</template>

<script setup>
// We'll keep this empty for now as we're creating a static version
// Later we can add data and methods for dynamic functionality
import HeaderTop from '@/components/HeaderTop.vue';
import FooterBottom from '@/components/FooterBottom.vue';

</script>

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

/* Header Styles */
.header {
  background-color: #003b5c;
  padding: 15px 0;
  color: white;
}

.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.search-bar {
  display: flex;
  align-items: center;
  background: white;
  border-radius: 4px;
  padding: 5px 10px;
}

.search-bar input {
  border: none;
  padding: 5px;
  outline: none;
}

.search-button {
  background: none;
  border: none;
  cursor: pointer;
}

.search-icon {
  display: inline-block;
  width: 16px;
  height: 16px;
  background-color: #003b5c;
  border-radius: 50%;
  position: relative;
}

.search-icon::after {
  content: "";
  position: absolute;
  top: 12px;
  left: 12px;
  width: 6px;
  height: 2px;
  background-color: #003b5c;
  transform: rotate(45deg);
}

.text-logo {
  color: white;
  font-size: 24px;
  font-weight: bold;
}

.nav-links {
  display: flex;
  align-items: center;
}

.nav-links a {
  color: white;
  margin-left: 10px;
  font-size: 14px;
}

.divider {
  margin: 0 5px;
  color: white;
}

.cart-icon {
  position: relative;
  margin-left: 15px;
}

.cart-icon::before {
  content: "🛒";
  font-size: 18px;
}

.cart-count {
  position: absolute;
  top: -8px;
  right: -8px;
  background: white;
  color: #003b5c;
  border-radius: 50%;
  width: 18px;
  height: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
}

/* Hero Section */
.hero {
  background-color: #003b5c;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5));
  height: 400px;
  display: flex;
  align-items: center;
  position: relative;
}

.hero-content {
  position: relative;
  z-index: 1;
  color: white;
  padding: 0 20px;
  max-width: 600px;
  margin-left: 50px;
}

.hero-text h1 {
  font-size: 32px;
  margin-bottom: 15px;
  font-weight: bold;
}

.hero-text p {
  font-size: 16px;
}

/* Booking CTA */
.booking-cta {
  padding: 30px 0;
}

.booking-box {
  background-color: #003b5c;
  color: white;
  padding: 20px;
  text-align: center;
  border-radius: 4px;
}

.booking-box h2 {
  font-size: 24px;
  margin-bottom: 10px;
}

.booking-box p {
  font-size: 16px;
}

.cta-link {
  color: white;
  font-weight: bold;
  text-decoration: underline;
}

/* Services Section */
.services {
  padding: 40px 0;
}

.section-title {
  text-align: center;
  margin-bottom: 30px;
  font-size: 28px;
  color: #333;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 30px;
}

.service-card {
  border: 1px solid #eee;
  border-radius: 4px;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.service-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

.placeholder-image {
  width: 100%;
  height: 200px;
  background-color: #f0f0f0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #999;
  font-size: 14px;
}

.placeholder-image::after {
  content: "Pet Service Image";
}

.service-content {
  padding: 15px;
}

.service-content h3 {
  margin-bottom: 10px;
  color: #003b5c;
}

.service-content p {
  font-size: 14px;
  color: #666;
}

/* Additional Info Section */
.additional-info {
  padding: 30px 0;
  background-color: #f9f9f9;
}

.additional-info p {
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
  font-size: 14px;
  color: #666;
}

/* Footer */
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

/* Responsive Styles */
@media (max-width: 768px) {
  .header-content {
    flex-direction: column;
    gap: 15px;
  }

  .hero-content {
    margin-left: 0;
    text-align: center;
  }

  .services-grid {
    grid-template-columns: 1fr;
  }

  .footer-content {
    grid-template-columns: 1fr 1fr;
  }

  .store-location {
    grid-column: span 2;
  }
}

@media (max-width: 480px) {
  .footer-content {
    grid-template-columns: 1fr;
  }

  .store-location {
    grid-column: span 1;
  }

  .hero-text h1 {
    font-size: 24px;
  }
}
</style>
