<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>login.jsp</title>
</head>
<body>

<h3>login.jsp Page 입니다</h3>

ID <%= request.getParameter("id") %>
/ PW <%= request.getParameter("pw") %> 처리

</body>
</html>