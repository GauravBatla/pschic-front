 
      <script type="text/javascript" src="js/jquery-2.1.3.min.js"></script>
      <script type="text/javascript" src="js/jquery.noconflict.js"></script>
      <script type="text/javascript" src="js/modernizr.2.8.3.min.js"></script>
      <script type="text/javascript" src="js/jquery-migrate-1.2.1.min.js"></script>
      <script type="text/javascript" src="js/jquery-ui.1.11.2.min.js"></script> 
      <script type="text/javascript" src="js/bootstrap.min.js"></script> 
      <script type="text/javascript" src="components/magnific-popup/jquery.magnific-popup.min.js"></script>  
      <script type="text/javascript" src="js/jquery.stellar.min.js"></script> 
      <script type="text/javascript" src="js/waypoints.min.js"></script> 
      <script type="text/javascript" src="components/owl-carousel/owl.carousel.min.js"></script> 
      <script type="text/javascript" src="components/revolution_slider/js/jquery.themepunch.tools.min.js"></script>
      <script type="text/javascript" src="components/revolution_slider/js/jquery.themepunch.revolution.min.js"></script> 
      <script type="text/javascript" src="js/jquery.plugins.js"></script> 
      <script type="text/javascript" src="js/main.js"></script>
      <script type="text/javascript" src="js/revolution-slider.js"></script>
      <script type="text/javascript">
          
      </script>
   </body>
</html>

<a href="tel:" class="btn-whatsapp-pulse btn-whatsapp-pulse-border">
    <i class="fa fa-phone"></i>
</a>

<style type="text/css">
    .btn-whatsapp-pulse {
    background: #25d366;
    color: white;
    position: fixed;
    bottom: 20px;
    right: 20px;
    font-size: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 0;
    height: 0;
    padding: 35px;
    text-decoration: none;
    border-radius: 50%;
    animation-name: pulse;
    animation-duration: 1.5s;
    animation-timing-function: ease-out;
    animation-iteration-count: infinite;
}

@keyframes pulse {
    0% {
        box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.5);
    }
    80% {
        box-shadow: 0 0 0 14px rgba(37, 211, 102, 0);
    }
}

.btn-whatsapp-pulse-border {
    bottom: 120px;
    right: 20px;
    animation-play-state: paused;
}

.btn-whatsapp-pulse-border::before {
    content: "";
    position: absolute;
    border-radius: 50%;
    padding: 25px;
    border: 5px solid #25d366;
    opacity: 0.75;
    animation-name: pulse-border;
    animation-duration: 1.5s;
    animation-timing-function: ease-out;
    animation-iteration-count: infinite;
}

@keyframes pulse-border {
    0% {
        padding: 25px;
        opacity: 0.75;
    }
    75% {
        padding: 50px;
        opacity: 0;
    }
    100% {
        opacity: 0;
    }
}

</style>