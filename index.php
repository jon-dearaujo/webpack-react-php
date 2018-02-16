<!DOCTYPE html>
<html>
  <head>
    <title>php-react</title>
  </head>
  <body>
    <div id="react-container"></div>
    <script type="text/javascript" src="Index.bundled.js"></script>
    <script type="text/javascript">
    /*
      mount the props as you want. Its probably compatible with technologies such as Java .jsp, Rails .erb, Python .jinja.
      All you have to do is serealize some data and pass to props as a JSON object
    */
      var props = <?php echo json_encode(array('value' =>rand())) ?>;
      Global.Index.render(props, 'react-container');
    </script>
  </body>
</html>