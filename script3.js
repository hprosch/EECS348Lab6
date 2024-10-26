const passSubmit = document.getElementById("passwordButton");
			
			passSubmit.addEventListener("click", password);
			
			function password() {
				const password1 = document.getElementById("password1").value;
				const password2 = document.getElementById("password2").value;
				let correct = true;

				if (password1.length < 8) {
					alert("Password entered must be over 8 characters.");
				} else if (password1.length != password2.length) {
					alert("Passwords do not match.  Please try again.");
				} else {
					const length = password1.length;
					for (let i = 0; i <= length; i++) {
						if (password1.charAt(i) != password2.charAt(i)) {
							alert("Passwords do not match.  Please try again.");
							correct = false;
						}
					}
					if (correct == true) {
						alert("Passwords match.")
					}
				}
			}