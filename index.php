<!DOCTYPE html>
<html>
  <head>
    <title>php-react</title>
  </head>
  <body>
    <div id="react-container"></div>
    <script type="text/javascript" src="Index.bundled.js"></script>
    <script type="text/javascript">
      var props = <?php echo json_encode(array('value' =>rand())) ?>;
      Global.Index.render(props, 'react-container');
    </script>
  </body>
</html>