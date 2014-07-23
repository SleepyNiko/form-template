$(document).ready(function() {
    $(".error").hide();
    $("#MainResult").hide();
    $(".submit").click(function() {
        function r(e) {
            var t = new RegExp(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i);
            return t.test(e)
        }
        var e = $("#name").val();
        var t = $("#email").val();
        var n = $("#local").val();
        if (e == "") {
            $("#nameLb .error").show();
            return false
        }
        if (!r(t)) {
            $("#emailLb .error").show();
            return false
        }
        if (n == "") {
            $("#localLb .error").show();
            return false
        }
        var i = document.getElementsByName("reason");
        for (var s = 0; s < i.length; s++) {
            if (i[s].checked) {
                var o = i[s].value
            }
        }
        var u = "postName=" + e + "&postEmail=" + t + "&postLocal=" + n + "&postReason=" + o;
        jQuery.ajax({
            type: "POST",
            url: "assets/includes/ajaxprocess.php",
            dataType: "html",
            data: u,
            success: function(e) {
                $("#MainResult").html('<div class="response">' + e + "</div>");
                $("#MainResult").fadeIn("slow");
                $("#MainContent").hide()
            },
            error: function(e, t, n) {
                $("#ErrResults").html(n)
            }
        });
        return false
    })
})