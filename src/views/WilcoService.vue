<template>
  <div class="pet-grooming-app">
    <!-- Header Section -->
     

     <HeaderTop/>

    <!-- <header class="header">
      <h1 class="service-title">BATH</h1>
      <div class="underline"></div>
    </header> -->

    <!-- Main Image -->
    <div class="hero-image-container">
      <img 
        src="https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?q=80&w=1600&auto=format&fit=crop" 
        alt="Dog getting a bath" 
        class="hero-image"
      />
      <div class="hero-overlay">
        <h1 class="hero-title">BATH</h1>
        <div class="hero-underline"></div>
      </div>
    </div>

    <!-- Pricing Tiers -->
    <div class="pricing-grid">
      <!-- X-Small Dogs -->
      <div class="pricing-card">
        <div class="size-badge x-small">X-SMALL</div>
        <div class="dog-info">
          <img src="https://images.unsplash.com/photo-1583512603806-077998240c7a?q=80&w=200" alt="X-Small dog" class="dog-image" />
          <h3 class="weight-range">1 - 10 lbs.</h3>
        </div>
        <div class="pricing-options">
          <div class="price-row">
            <span class="service-type">BATH ONLY</span>
            <span class="price">starts at $24</span>
          </div>
          <div class="price-row">
            <span class="service-type">BATH + CUT</span>
            <span class="price">starts at $46</span>
          </div>
        </div>
      </div>

      <!-- Small Dogs -->
      <div class="pricing-card">
        <div class="size-badge small">SMALL</div>
        <div class="dog-info">
          <img src="https://images.unsplash.com/photo-1543466835-00a7907e9de1?q=80&w=200" alt="Small dog" class="dog-image" />
          <h3 class="weight-range">11 - 25 lbs.</h3>
        </div>
        <div class="pricing-options">
          <div class="price-row">
            <span class="service-type">BATH ONLY</span>
            <span class="price">starts at $28</span>
          </div>
          <div class="price-row">
            <span class="service-type">BATH + CUT</span>
            <span class="price">starts at $50</span>
          </div>
        </div>
      </div>

      <!-- Medium Dogs -->
      <div class="pricing-card">
        <div class="size-badge medium">MEDIUM</div>
        <div class="dog-info">
          <img src="https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?q=80&w=200" alt="Medium dog" class="dog-image" />
          <h3 class="weight-range">26 - 50 lbs.</h3>
        </div>
        <div class="pricing-options">
          <div class="price-row">
            <span class="service-type">BATH ONLY</span>
            <span class="price">starts at $32</span>
          </div>
          <div class="price-row">
            <span class="service-type">BATH + CUT</span>
            <span class="price">starts at $57</span>
          </div>
        </div>
      </div>

      <!-- Large Dogs -->
      <div class="pricing-card">
        <div class="size-badge large">LARGE</div>
        <div class="dog-info">
          <img src="https://images.unsplash.com/photo-1477884213360-7e9d7dcc1e48?q=80&w=200" alt="Large dog" class="dog-image" />
          <h3 class="weight-range">51 - 80 lbs.</h3>
        </div>
        <div class="pricing-options">
          <div class="price-row">
            <span class="service-type">BATH ONLY</span>
            <span class="price">starts at $39</span>
          </div>
          <div class="price-row">
            <span class="service-type">BATH + CUT</span>
            <span class="price">starts at $68</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Experience Section -->
    <section class="experience-section">
      <h2 class="experience-title">TAIL-WAGGING GROOMING EXPERIENCE</h2>
      <p class="experience-subtitle">From start to finish, we make your pet's health and wellbeing our top priority.</p>

      <div class="services-container">
        <!-- Services List -->
        <div class="services-list">
          <div class="service-category">
            <div class="service-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-bath"><path d="M9 6 6.5 3.5a1.5 1.5 0 0 0-1-.5C4.683 3 4 3.683 4 4.5V17a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5"/><line x1="10" x2="8" y1="5" y2="7"/><line x1="2" x2="22" y1="12" y2="12"/><line x1="7" x2="7" y1="19" y2="21"/><line x1="17" x2="17" y1="19" y2="21"/></svg>
            </div>
            <h3>Bath</h3>
          </div>

          <ul class="service-items">
            <li>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="check-icon"><polyline points="20 6 9 17 4 12"></polyline></svg>
              Deep-cleansing shampoo
            </li>
            <li>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="check-icon"><polyline points="20 6 9 17 4 12"></polyline></svg>
              Blow-dry
            </li>
            <li>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="check-icon"><polyline points="20 6 9 17 4 12"></polyline></svg>
              Nail trim
            </li>
            <li>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="check-icon"><polyline points="20 6 9 17 4 12"></polyline></svg>
              Gland expression
            </li>
          </ul>

          <ul class="service-items">
            <li>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="check-icon"><polyline points="20 6 9 17 4 12"></polyline></svg>
              Ear cleaning
            </li>
            <li>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="check-icon"><polyline points="20 6 9 17 4 12"></polyline></svg>
              15-min brushout
            </li>
            <li>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="check-icon"><polyline points="20 6 9 17 4 12"></polyline></svg>
              Scented spritz
            </li>
          </ul>

          <button class="book-button">BOOK APPOINTMENT</button>
          <p class="pricing-note">Pricing varies by store/location and breed type.</p>
        </div>

        <!-- Process Steps -->
        <div class="process-steps">
          <div class="step">
            <div class="step-number">1.</div>
            <div class="step-content">
              <h4>Check-In & Pre-Bath Assessment</h4>
              <span class="time">(~10 min)</span>
            </div>
          </div>

          <div class="step">
            <div class="step-number">2.</div>
            <div class="step-content">
              <h4>Brushing Before Bath</h4>
              <span class="time">(~30 min)</span>
            </div>
          </div>

          <div class="step">
            <div class="step-number">3.</div>
            <div class="step-content">
              <h4>Rinse & Wet Down</h4>
              <span class="time">(~45 min)</span>
            </div>
          </div>

          <div class="step">
            <div class="step-number">4.</div>
            <div class="step-content">
              <h4>Shampoo</h4>
              <span class="time">(~45 min)</span>
            </div>
          </div>

          <div class="step">
            <div class="step-number">5.</div>
            <div class="step-content">
              <h4>Report card</h4>
              <span class="time">(~10 min)</span>
            </div>
          </div>
        </div>

        <!-- Care Check Info -->
       <!-- <div class="care-check">
          <div class="care-check-content">
            <img src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?q=80&w=300" alt="Dog being checked" class="care-check-image" />
            <div class="care-check-text">
              <h4>Your service starts with our 7-Point Pet Care Check,*</h4>
              <p>a quick screening to make sure nothing looks or feels abnormal on your pet.</p>
              <p class="disclaimer">*The 7-Point Pet Care Check is not a substitute for regular examinations and care from a licensed veterinarian. If we find any concerns, we will refer you to your veterinarian.</p>
            </div>
          </div>
          <button class="book-button">BOOK APPOINTMENT</button>
        </div> -->

      </div>
    </section>
    <FooterBottom/>
  </div>
</template>



<script setup>
import HeaderTop from '@/components/HeaderTop.vue';
import FooterBottom from '@/components/FooterBottom.vue';

// export default {
//   name: 'PetGroomingService',
//   data() {
//     return {
//       // Data can be added here if needed for dynamic content
//     }
//   },
//   methods: {
//     // Methods can be added here for interactivity
//   }
// }
</script>

<style>

/* Base Styles */

/* Global Styles */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.pet-grooming-app {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  color: #0a2540;
}


.service-title {
  font-size: 28px;
  font-weight: 700;
  letter-spacing: 1px;
  margin-bottom: 10px;
}

.underline {
  height: 4px;
  width: 200px;
  background-color: #0a2540;
  margin-bottom: 20px;
}

/* Main Image */
/* .main-image-container {
  margin-bottom: 30px;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  max-width: 400px;
}

.main-image {
  width: 100%;
  height: auto;
  display: block;
  object-fit: cover;
} */

/* Hero Image Styles */
.hero-image-container {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  max-width: 1160px;
  width: 100vw;
  height: 70vh;
  overflow: hidden;
}

.hero-image {
  width: 100%;
  height: auto;
  display: block;
  object-fit: cover;
}

.hero-overlay {
  position: absolute;
  bottom: 10%;
  left: 10%;
  z-index: 2;
}

.hero-title {
  font-size: 4rem;
  font-weight: 700;
  letter-spacing: 2px;
  color: white;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  margin-bottom: 20px;
}

.hero-underline {
  height: 6px;
  width: 150px;
  background-color: white;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}


/* Pricing Grid */
.pricing-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin-bottom: 40px;
}

.pricing-card {
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  background-color: #fff;
  transition: transform 0.3s ease;
  position: relative;
}

.pricing-card:hover {
  transform: translateY(-5px);
}

.size-badge {
  position: absolute;
  top: 10px;
  left: 10px;
  padding: 5px 12px;
  border-radius: 20px;
  color: white;
  font-weight: 600;
  font-size: 12px;
  letter-spacing: 0.5px;
}

.x-small {
  background-color: #0a2540;
}

.small {
  background-color: #0a2540;
}

.medium {
  background-color: #0a2540;
}

.large {
  background-color: #0a2540;
}

.dog-info {
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.dog-image {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 15px;
  border: 3px solid #f0f4f8;
}

.weight-range {
  font-size: 18px;
  font-weight: 600;
  color: #0a2540;
}

.pricing-options {
  padding: 0 20px 20px;
}

.price-row {
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
  border-top: 1px solid #e6ecf1;
}

.service-type {
  font-size: 14px;
  font-weight: 600;
  color: #0a2540;
}

.price {
  font-size: 14px;
  color: #0a2540;
}

/* Experience Section */
.experience-section {
  background-color: #f8fafc;
  padding: 30px;
  border-radius: 12px;
  margin-top: 40px;
}

.experience-title {
  font-size: 24px;
  font-weight: 700;
  color: #0a2540;
  margin-bottom: 10px;
}

.experience-subtitle {
  font-size: 16px;
  color: #4a5568;
  margin-bottom: 30px;
}

.services-container {
  display: grid;
  grid-template-columns: 1fr;
  gap: 30px;
}

@media (min-width: 768px) {
  .services-container {
    grid-template-columns: 1fr 1fr;
  }
  
  .care-check {
    grid-column: span 2;
  }
}

/* Services List */
.services-list {
  background-color: #fff;
  padding: 25px;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
}

.service-category {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}

.service-icon {
  background-color: #e6f7ff;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 15px;
  color: #0a2540;
}

.service-items {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;
  list-style: none;
  margin-bottom: 30px;
}

@media (max-width: 600px) {
  .service-items {
    grid-template-columns: 1fr;
  }
}

.service-items li {
  display: flex;
  align-items: center;
  font-size: 14px;
}

.check-icon {
  color: #38b2ac;
  margin-right: 10px;
  flex-shrink: 0;
}

/* Process Steps */
.process-steps {
  background-color: #fff;
  padding: 25px;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
}

.step {
  display: flex;
  margin-bottom: 20px;
  align-items: flex-start;
}

.step-number {
  background-color: #bee3f8;
  color: #0a2540;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  margin-right: 15px;
  flex-shrink: 0;
}

.step-content {
  flex-grow: 1;
}

.step-content h4 {
  font-size: 16px;
  margin-bottom: 5px;
}

.time {
  font-size: 14px;
  color: #718096;
}

/* Care Check */
.care-check {
  background-color: #fff;
  padding: 25px;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  margin-top: 20px;
}

.care-check-content {
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
}

@media (min-width: 768px) {
  .care-check-content {
    flex-direction: row;
  }
}

.care-check-image {
  width: 100%;
  max-width: 300px;
  height: auto;
  border-radius: 8px;
  margin-bottom: 20px;
  object-fit: cover;
}

@media (min-width: 768px) {
  .care-check-image {
    margin-right: 20px;
    margin-bottom: 0;
  }
}

.care-check-text {
  flex-grow: 1;
}

.care-check-text h4 {
  font-size: 18px;
  margin-bottom: 10px;
  color: #0a2540;
}

.care-check-text p {
  font-size: 14px;
  line-height: 1.6;
  color: #4a5568;
  margin-bottom: 10px;
}

.disclaimer {
  font-size: 12px;
  color: #718096;
  font-style: italic;
}

/* Button Styles */
.book-button {
  background-color: #0a2540;
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 4px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s ease;
  width: 100%;
  margin-top: 10px;
}

.book-button:hover {
  background-color: #1a365d;
}

.pricing-note {
  font-size: 12px;
  color: #718096;
  text-align: center;
  margin-top: 10px;
}
</style>