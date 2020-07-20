package ee.rmit.application.models;

public class StatusResponse {
	
  public static transient final StatusResponse SUCCESS = new StatusResponse("SUCCESS", "Succeeded");
  
	private String code;
	private String message;
	
  public StatusResponse() {
  	code = null;
	  message = null;	  
  }
  
  public StatusResponse(String code, String message) {

    this.code = code;
    this.message = message;
  }

  
	public String getCode() {
		return code;
	}
	public void setCode(String code) {
		this.code = code;
	}
	public String getMessage() {
		return message;
	}
	public void setMessage(String message) {
		this.message = message;
	}
}
