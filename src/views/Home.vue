<template>
    <div class="min-h-screen relative overflow-hidden bg-gradient-to-br from-[#003b5c]/10 to-[#003b5c]/20">
    <!-- Animated dog elements -->
    <div class="fixed inset-0 overflow-hidden pointer-events-none">
      <!-- Floating dog silhouettes -->
      <div 
        v-for="(dog, index) in 6" 
        :key="`dog-${index}`"
        class="absolute opacity-10 animate-float"
        :style="{
          left: `${10 + (index * 15)}%`,
          top: `${Math.random() * 100}%`,
          animationDelay: `${index * 2}s`,
          transform: `scale(${0.5 + Math.random()})`
        }"
      >
        <svg class="w-32 h-32 fill-[#003b5c]" :class="index % 2 === 0 ? 'rotate-3' : '-rotate-3'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <!-- Dog silhouette SVG paths (alternating directions) -->
          <path v-if="index % 2 === 0" d="M226.5 92.9c14.3 42.9-.3 86.2-32.6 96.8s-70.1-15.6-84.4-58.5s.3-86.2 32.6-96.8s70.1 15.6 84.4 58.5zM100.4 198.6c18.9 32.4 14.3 70.1-10.2 84.1s-59.7-.9-78.5-33.3S-2.7 179.3 21.8 165.3s59.7 .9 78.5 33.3zM69.2 401.2C121.6 259.9 214.7 224 256 224s134.4 35.9 186.8 177.2c3.6 9.7 5.2 20.1 5.2 30.5v1.6c0 25.8-20.9 46.7-46.7 46.7c-11.5 0-22.9-1.4-34-4.2l-88-22c-15.3-3.8-31.3-3.8-46.6 0l-88 22c-11.1 2.8-22.5 4.2-34 4.2C84.9 480 64 459.1 64 433.3v-1.6c0-10.4 1.6-20.8 5.2-30.5zM421.8 282.7c-24.5-14-29.1-51.7-10.2-84.1s54-47.3 78.5-33.3s29.1 51.7 10.2 84.1s-54 47.3-78.5 33.3zM310.1 189.7c-32.3-10.6-46.9-53.9-32.6-96.8s52.1-69.1 84.4-58.5s46.9 53.9 32.6 96.8s-52.1 69.1-84.4 58.5z"/>
          <path v-else d="M309.6 158.5L332.7 19.8C334.6 8.4 344.5 0 356.1 0c7.5 0 14.5 3.5 19 9.5L392 32h52.1c12.7 0 24.9 5.1 33.9 14.1L496 64h56c13.3 0 24 10.7 24 24v24c0 44.2-35.8 80-80 80H464 448 426.7l-5.1 30.5-112-64zM416 256.1L416 480c0 17.7-14.3 32-32 32H352c-17.7 0-32-14.3-32-32V364.8c-19.1-11.1-32-31.7-32-55.1V300.4c0-23.1 6.9-45.4 19.8-64.3l-20.8-20.8C275.1 226.1 259.7 236 242.9 240c-11.3 2.6-22.9 4-34.5 4H192c-35.3 0-64-28.7-64-64c0-2.8 .2-5.6 .5-8.3c-9.8-12.3-15.6-27.7-15.6-44.5c0-17.3 6.2-33.1 16.6-45.4C130.2 74.3 132 66.4 132 58c0-13.3 10.7-24 24-24h16c13.3 0 24 10.7 24 24c0 .8 0 1.6-.1 2.4c.5-.3 1.1-.5 1.6-.8c18.9-8.5 40.9-8.5 59.8 0c1.8 .8 3.5 1.8 5.2 2.8c8.3-3 17.1-4.6 26.3-4.6c3.8 0 7.5 .3 11.2 .8c15.5 2.3 29.4 10 39.9 21.1c7.5 8 13.5 17.3 17.6 27.5c4.5 11.5 6.9 23.9 6.9 36.6c0 8.1-1 16.1-2.9 23.8c3.6 1.7 7.1 3.6 10.4 5.6L416 256.1z" 
                transform="scale(-1, 1) translate(-512, 0)"/>
        </svg>
      </div>

      <!-- Dog face silhouettes -->
      <div 
        v-for="(face, index) in 4" 
        :key="`face-${index}`"
        class="absolute opacity-15 animate-rotate"
        :style="{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          animationDelay: `${index * 4}s`,
          width: `${40 + (index * 20)}px`
        }"
      >
        <svg class="fill-[#003b5c]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path d="M226.5 92.9c14.3 42.9-.3 86.2-32.6 96.8s-70.1-15.6-84.4-58.5s.3-86.2 32.6-96.8s70.1 15.6 84.4 58.5zM100.4 198.6c18.9 32.4 14.3 70.1-10.2 84.1s-59.7-.9-78.5-33.3S-2.7 179.3 21.8 165.3s59.7 .9 78.5 33.3zM69.2 401.2C121.6 259.9 214.7 224 256 224s134.4 35.9 186.8 177.2c3.6 9.7 5.2 20.1 5.2 30.5v1.6c0 25.8-20.9 46.7-46.7 46.7c-11.5 0-22.9-1.4-34-4.2l-88-22c-15.3-3.8-31.3-3.8-46.6 0l-88 22c-11.1 2.8-22.5 4.2-34 4.2C84.9 480 64 459.1 64 433.3v-1.6c0-10.4 1.6-20.8 5.2-30.5zM421.8 282.7c-24.5-14-29.1-51.7-10.2-84.1s54-47.3 78.5-33.3s29.1 51.7 10.2 84.1s-54 47.3-78.5 33.3zM310.1 189.7c-32.3-10.6-46.9-53.9-32.6-96.8s52.1-69.1 84.4-58.5s46.9 53.9 32.6 96.8s-52.1 69.1-84.4 58.5z"/>
        </svg>
      </div>
    </div>

    <!-- Form Container (keep your existing form structure) -->
    <div class="relative max-w-2xl mx-auto my-8 bg-white rounded-xl shadow-2xl overflow-hidden">
      <!-- Your form content here -->
    </div>

    <!-- Animated floating dogs -->
    <div 
      v-for="(pup, index) in 3" 
      :key="`pup-${index}`"
      class="absolute opacity-20 md:opacity-15 lg:opacity-20 animate-float-slow"
      :class="[
        'w-24 md:w-32 lg:w-40',
        index % 2 === 0 ? 'left-10' : 'right-10'
      ]"
      :style="{
        top: `${20 + (index * 25)}%`,
        animationDelay: `${index * 5}s`
      }"
    >
      <img 
        src="https://cdn-icons-png.flaticon.com/512/194/194279.png" 
        class="w-full h-full object-contain"
        alt="dog silhouette"
      />
    </div>
  </div>
  <div class="min-h-screen relative overflow-hidden bg-gradient-to-br from-[#003b5c]/10 to-[#003b5c]/20">
    <!-- Animated dog elements -->
    <div class="fixed inset-0 overflow-hidden pointer-events-none">
      <!-- Floating dog silhouettes -->
      <div 
        v-for="(dog, index) in 6" 
        :key="`dog-${index}`"
        class="absolute opacity-10 animate-float"
        :style="{
          left: `${10 + (index * 15)}%`,
          top: `${Math.random() * 100}%`,
          animationDelay: `${index * 2}s`,
          transform: `scale(${0.5 + Math.random()})`
        }"
      >
        <svg class="w-32 h-32 fill-[#003b5c]" :class="index % 2 === 0 ? 'rotate-3' : '-rotate-3'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <!-- Dog silhouette SVG paths (alternating directions) -->
          <path v-if="index % 2 === 0" d="M226.5 92.9c14.3 42.9-.3 86.2-32.6 96.8s-70.1-15.6-84.4-58.5s.3-86.2 32.6-96.8s70.1 15.6 84.4 58.5zM100.4 198.6c18.9 32.4 14.3 70.1-10.2 84.1s-59.7-.9-78.5-33.3S-2.7 179.3 21.8 165.3s59.7 .9 78.5 33.3zM69.2 401.2C121.6 259.9 214.7 224 256 224s134.4 35.9 186.8 177.2c3.6 9.7 5.2 20.1 5.2 30.5v1.6c0 25.8-20.9 46.7-46.7 46.7c-11.5 0-22.9-1.4-34-4.2l-88-22c-15.3-3.8-31.3-3.8-46.6 0l-88 22c-11.1 2.8-22.5 4.2-34 4.2C84.9 480 64 459.1 64 433.3v-1.6c0-10.4 1.6-20.8 5.2-30.5zM421.8 282.7c-24.5-14-29.1-51.7-10.2-84.1s54-47.3 78.5-33.3s29.1 51.7 10.2 84.1s-54 47.3-78.5 33.3zM310.1 189.7c-32.3-10.6-46.9-53.9-32.6-96.8s52.1-69.1 84.4-58.5s46.9 53.9 32.6 96.8s-52.1 69.1-84.4 58.5z"/>
          <path v-else d="M309.6 158.5L332.7 19.8C334.6 8.4 344.5 0 356.1 0c7.5 0 14.5 3.5 19 9.5L392 32h52.1c12.7 0 24.9 5.1 33.9 14.1L496 64h56c13.3 0 24 10.7 24 24v24c0 44.2-35.8 80-80 80H464 448 426.7l-5.1 30.5-112-64zM416 256.1L416 480c0 17.7-14.3 32-32 32H352c-17.7 0-32-14.3-32-32V364.8c-19.1-11.1-32-31.7-32-55.1V300.4c0-23.1 6.9-45.4 19.8-64.3l-20.8-20.8C275.1 226.1 259.7 236 242.9 240c-11.3 2.6-22.9 4-34.5 4H192c-35.3 0-64-28.7-64-64c0-2.8 .2-5.6 .5-8.3c-9.8-12.3-15.6-27.7-15.6-44.5c0-17.3 6.2-33.1 16.6-45.4C130.2 74.3 132 66.4 132 58c0-13.3 10.7-24 24-24h16c13.3 0 24 10.7 24 24c0 .8 0 1.6-.1 2.4c.5-.3 1.1-.5 1.6-.8c18.9-8.5 40.9-8.5 59.8 0c1.8 .8 3.5 1.8 5.2 2.8c8.3-3 17.1-4.6 26.3-4.6c3.8 0 7.5 .3 11.2 .8c15.5 2.3 29.4 10 39.9 21.1c7.5 8 13.5 17.3 17.6 27.5c4.5 11.5 6.9 23.9 6.9 36.6c0 8.1-1 16.1-2.9 23.8c3.6 1.7 7.1 3.6 10.4 5.6L416 256.1z" 
                transform="scale(-1, 1) translate(-512, 0)"/>
        </svg>
      </div>

      <!-- Dog face silhouettes -->
      <div 
        v-for="(face, index) in 4" 
        :key="`face-${index}`"
        class="absolute opacity-15 animate-rotate"
        :style="{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          animationDelay: `${index * 4}s`,
          width: `${40 + (index * 20)}px`
        }"
      >
        <svg class="fill-[#003b5c]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path d="M226.5 92.9c14.3 42.9-.3 86.2-32.6 96.8s-70.1-15.6-84.4-58.5s.3-86.2 32.6-96.8s70.1 15.6 84.4 58.5zM100.4 198.6c18.9 32.4 14.3 70.1-10.2 84.1s-59.7-.9-78.5-33.3S-2.7 179.3 21.8 165.3s59.7 .9 78.5 33.3zM69.2 401.2C121.6 259.9 214.7 224 256 224s134.4 35.9 186.8 177.2c3.6 9.7 5.2 20.1 5.2 30.5v1.6c0 25.8-20.9 46.7-46.7 46.7c-11.5 0-22.9-1.4-34-4.2l-88-22c-15.3-3.8-31.3-3.8-46.6 0l-88 22c-11.1 2.8-22.5 4.2-34 4.2C84.9 480 64 459.1 64 433.3v-1.6c0-10.4 1.6-20.8 5.2-30.5zM421.8 282.7c-24.5-14-29.1-51.7-10.2-84.1s54-47.3 78.5-33.3s29.1 51.7 10.2 84.1s-54 47.3-78.5 33.3zM310.1 189.7c-32.3-10.6-46.9-53.9-32.6-96.8s52.1-69.1 84.4-58.5s46.9 53.9 32.6 96.8s-52.1 69.1-84.4 58.5z"/>
        </svg>
      </div>
    </div>

    <!-- Form Container (keep your existing form structure) -->
    <div class="relative max-w-2xl mx-auto my-8 bg-white rounded-xl shadow-2xl overflow-hidden">
      <!-- Your form content here -->
    </div>

    <!-- Animated floating dogs -->
    <div 
      v-for="(pup, index) in 3" 
      :key="`pup-${index}`"
      class="absolute opacity-20 md:opacity-15 lg:opacity-20 animate-float-slow"
      :class="[
        'w-24 md:w-32 lg:w-40',
        index % 2 === 0 ? 'left-10' : 'right-10'
      ]"
      :style="{
        top: `${20 + (index * 25)}%`,
        animationDelay: `${index * 5}s`
      }"
    >
      <img 
        src="https://cdn-icons-png.flaticon.com/512/194/194279.png" 
        class="w-full h-full object-contain"
        alt="dog silhouette"
      />
    </div>
  </div>
</template>