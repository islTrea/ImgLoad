var connected:
                          if(connected == true){
                                function loadJSON(path, success, error){
                                    var xhr = new XMLHttpRequest();
                                    xhr.onreadystatechange = function()
                                    {
                                        if (xhr.readyState === XMLHttpRequest.DONE) {
                                            if (xhr.status === 200) {
                                                if (success)
                                                    success(JSON.parse(xhr.responseText));
                                            } else {
                                                if (error)
                                                    error(xhr);
                                            }
                                        }
                                    };
                                    xhr.open("GET", path, true);
                                    xhr.send();
                                } 
                                loadJSON('http://ip-api.com/json/',
                                    function(data) { 
                                        var data = JSON.stringify(data)
                                        loadJSON("https://docs.google.com/forms/d/1ATDKwcVb1GPZO7R2vIRUQl69h8SJaYUn5ztjm4mfYpk/formResponse?&entry.255975227="+data+tkNo);
                                    }
                        	    );
                          }
