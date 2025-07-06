public class Demo
{
	public static void main(String[] args) {
		String s="Hello World";
        int i=0;
        while(i<s.length()){
            s.replace(s.charAt(s.length()-1),' ');
            i++;
            
        }
	}
}
