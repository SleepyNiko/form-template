<div class="form-wrapper">
    <div id="form-inner">
        <div id="ErrResults"><!-- retrive Error Here --></div>
        <div id="MainResult"><!-- retrive response Here --></div>
        <div id="MainContent">
        
            <form id="MyContactForm" name="MyContactForm" method="post" action="">            
	            
	            <input class="text-input" type="text" name="name" id="name" onfocus="if(this.value == \'Name\') { this.value = \'\'; }" value="Name" maxlength="25" />
	            <label for="name" id="nameLb"><span class="error">Name Field Required</span></label>
	            
	            <input class="text-input" type="text" name="email" id="email" onfocus="if(this.value == \'Email\') { this.value = \'\'; }" value="Email" />
	            <label for="email" id="emailLb"><span class="error">Email Field Required</span></label>
	            
	            <input class="text-input" type="text" name="local" id="local" onfocus="if(this.value == \'Where do you live?\') { this.value = \'\'; }" value="Where do you live?" />
	            <label for="local" id="localLb"><span class="error">Location Required</span></label>
	            
	            <ul class="radio-selection">
                	<li class="float-left">
                		<input type="radio" name="reason" id="reason" value="Business" checked="" />
                	</li>
                	<li class="radio-choice float-left">Business</li>
                </ul>
	            <ul class="radio-selection">
                	<li class="float-left">
                    	<input type="radio" name="reason" id="reason" value="Pleasure" checked="" />
                    </li>
                	<li class="radio-choice float-left">Pleasure</li>
                </ul>
	            
	            <input type="submit" class="submit clear" onClick="_gaq.push([\'_trackEvent\', \'Mailing List\', \'Submit\', \'Contact\',, false]);" value="" />
            </form>
        
        </div>
        <div style="clear:both;"></div>
    </div>
</div>