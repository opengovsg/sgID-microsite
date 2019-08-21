---
layout: page
title: FAQ
permalink: /faq/
---

<div class="faq-selector-container">
	<span onClick="toggleFAQ('citizen')" class="faq-selector-active" id="faq-selector-citizen">Citizens</span>
	<span onClick="toggleFAQ('business')" class="faq-selector-inactive" id="faq-selector-business">Business</span>
</div>

<div class="faq-body-container">
	<div id="faq-body-citizen">
		<h2>What does the sgID app do?</h2>
		<p>The sgID app for citizens enables you to verify your identity to businesses without providing your NRIC. When you first download the app, you will go through a one time setup with SingPass. Your personal information from MyInfo will be encrypted and downloaded onto your phone, so sgID never sees or stores any of it.</p>
		<p>So instead of sharing your identity wholesale using your physical NRIC, sgID enables you to choose only information you wish to share with businesses. You can also keep track of where and with whom you shared your personal information.</p>
		<h2>What security measures does sgID provide?</h2>
		<p>sgID employs a zero knowledge protocol, and does not store any of your data that passes through our servers. Even in the case of a data breach, your data will never be compromised because it remains safely in your phone, in your control.</p>
		<p>When you start using sgID to share your data, it creates a unique identifier for you and every business you authenticate with. This means your activities cannot be traced across businesses.</p>
		<p>Additionally, when you first set up your sgID, you will be asked to create a PIN or register your FaceID/TouchID so only you can access it.</p>
		<h2>Is sgID a government endorsed solution?</h2>
		<p>Yes. sgID is a government initiative, under the National Digital Identity (NDI) banner.</p>
		<h2>Where can I use sgID?</h2>
		<p>On any app or website which displays a Sign in with sgID button.</p>
		<h2>Do I have to sign in to SingPass for every authentication?</h2>
		<p>No. When you first set up your sgID, there is a one time setup with SingPass. After that, you will no longer need to sign in to SingPass.</p>
	</div>

	<div id="faq-body-business">
		<h2>What is sgID?</h2>
		<p>sgID makes it easy for your users to sign in to your apps and websites, and start using your app right away.  Adding a Sign In with sgID button in your app enables you to request for verified information from users. With users’ permission, their verified information is retrieved from MyInfo, so you can be assured the information received is authentic.</p>
		<h2>Does sgID track my users’ activity or data?</h2>
		<p>sgID was built with privacy in mind, designed to enable users to stay in control of their personal data. We employ end to end encryption, and do not store any user data.</p>
		<h2>Is sgID compliant with PDPA?</h2>
		<p>Yes. The PDPA requires businesses to be compliant with clauses by 1 September 2019, surrounding consent obligation, purpose limitation obligation, and notification obligation, all of which are built into our solution, sgID. Please visit the PDPC site here for more information on the legislation, guidelines, exemption, and enforcement of the PDPA.</p>
		<h2>Do businesses need to pay to use sgID?</h2>
		<p>sgID is free of charge for businesses and citizens.</p>
		<h2>Is sgID a government endorsed solution?</h2>
		<p>Yes. sgID is a government initiative, under the National Digital Identity (NDI) banner.</p>
		<h2>How do we integrate sgID into our existing platform?</h2>
		<p>With our Developer Portal, it takes minutes to onboard and create a Sign in with sgID button for your website. Enter your business info, app details, and select MyInfo scopes required to create an application. Visit our Developer Portal to get started.</p>
	</div>
</div>

<script>
	function toggleFAQ(user) {
		if (user == 'citizen') {
			document.getElementById("faq-body-business").style.display = "none";
			document.getElementById("faq-body-citizen").style.display = "block";
			document.getElementById("faq-selector-business").classList.add('faq-selector-inactive');
			document.getElementById("faq-selector-business").classList.remove('faq-selector-active');
			document.getElementById("faq-selector-citizen").classList.add('faq-selector-active');
			document.getElementById("faq-selector-citizen").classList.remove('faq-selector-inactive');
		} else if (user == 'business') {
			document.getElementById("faq-body-citizen").style.display = "none";
			document.getElementById("faq-body-business").style.display = "block";
			document.getElementById("faq-selector-citizen").classList.add('faq-selector-inactive');
			document.getElementById("faq-selector-citizen").classList.remove('faq-selector-active');
			document.getElementById("faq-selector-business").classList.add('faq-selector-active');
			document.getElementById("faq-selector-business").classList.remove('faq-selector-inactive');
		}
	}
</script>
