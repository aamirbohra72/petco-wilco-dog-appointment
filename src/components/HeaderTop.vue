<template>
<header class="header">
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
  </header>
  </template>

<script>
export default {
  name: 'HeaderTop'
};
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
</style>
