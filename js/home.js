$(function() {
  
  // --- 1. Sticky Top Banner ---
  $('#close-banner').on('click', function() {
    $('#top-banner').slideUp(300); // 300ms smooth slide up
  });

  // --- 2. Hero Text Animation (FIXED) ---
  const words = [
    "Universities",
    "Students",
    "Startups",
    "MNCs"
  ];
  let wordIndex = 0;
  const $wordContainer = $('.hero-text-anim');
  const $wordElements = $wordContainer.find('.word');
  
  // Set the first word as active immediately
  $wordElements.eq(0).addClass('active');

  function changeWord() {
    // Fade out the current word
    $wordElements.eq(wordIndex).removeClass('active');
    
    // Update index
    wordIndex = (wordIndex + 1) % words.length;
    
    // Fade in the next word
    setTimeout(function() {
      $wordElements.eq(wordIndex).addClass('active');
    }, 1000); 
  }
  
  // Start the animation loop
  setInterval(changeWord, 3000); 


  // --- 3. GSAP Hero Section Intro Animation ---
  const tl = gsap.timeline();
  
  tl.from(".hero-text-1", { duration: 1, y: 50, opacity: 0, ease: "power3.out", delay: 0.2 });
  tl.from(".hero-text-2", { duration: 1, y: 30, opacity: 0, ease: "power3.out" }, "-=0.8");
  tl.from(".hero-text-3", { duration: 1, y: 20, opacity: 0, ease: "power3.out" }, "-=0.8");
  tl.from(".hero-image", { duration: 1.2, scale: 0.95, opacity: 0, ease: "power3.out" }, "-=1");
  gsap.from("header", { duration: 1, y: -30, opacity: 0, delay: 0.5 });


  // --- 4. UPDATED "What We Do" Accordion Logic (Smoother) ---
  $('#what-we-do-accordion .accordion-header').on('click', function() {
    const $item = $(this).closest('.accordion-item');
    const $content = $item.find('.accordion-content');
    const tabId = $item.data('tab');

    // Check if this item is already active
    const isActive = $item.hasClass('active');

    // 1. Close all other items (stop animation queue to prevent jitter)
    $('#what-we-do-accordion .accordion-item').removeClass('active');
    $('#what-we-do-accordion .accordion-content').stop(true, true).slideUp(300);

    // 2. If this item was NOT already active, open it
    if (!isActive) {
      $item.addClass('active');
      // Use jQuery's slideDown() with stop() to prevent queue
      $content.stop(true, true).slideDown(300);

      // 3. Update the image content on the right with a simple fade effect
      // Remove active class from all images
      $('#what-we-do-content .tab-content').removeClass('active img-fade');
      
      // Add active class to new image with a slight timeout to trigger CSS animation
      setTimeout(function(){
          $('#' + 'tab-' + tabId).addClass('active img-fade');
      }, 100);
    }
  });

  // --- 5. Tab Logic for "Our Robots" Section ---
  $('#robot-tabs .tab-item').on('click', function() {
    const tabId = $(this).data('tab');

    // Handle tab active state
    $('#robot-tabs .tab-item').removeClass('active');
    $(this).addClass('active');

    // Handle content pane active state
    $('#robot-content .tab-content').removeClass('active');
    $('#' + 'tab-' + tabId).addClass('active');
  });

});