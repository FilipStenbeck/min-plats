package se.stenbeck;

import java.io.IOException;
import java.io.InputStream;
import java.io.PrintWriter;
import java.io.StringWriter;
import java.net.URL;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.io.IOUtils;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

public class MinPlatsArray extends HttpServlet {
	private static final long serialVersionUID = 1L;

	public void handleRequest(HttpServletRequest req, HttpServletResponse resp)
			throws IOException {
		PrintWriter out = null;
		try {

			resp.setContentType("text/html");
			out = resp.getWriter();
			String p = req.getParameter("siteId");
			String id = null;
			if (p == null || p.length() == 0) {
				p = "Holmviksskogen";
			}

			if (p.equals("Hemmesta")) {
				id = "4500";
			} else if (p.equals("Gustavsbergs centrum")) {
				id = "4200";
			} else if (p.equals("Holmviksskogen")) {
				id = "4245";
			} else if (p.equals("Slussen")) {
				id = "9192";
			}

			//URL url = new URL("http://localhost:8888/data/test.json");
			URL url = new URL("https://api.trafiklab.se/sl/realtid/GetDpsDepartures.json?key=6707185a59791ecfb9bd173d74e2a343&siteId=" + id);

			InputStream openStream = url.openStream();
			StringWriter writer = new StringWriter();
			IOUtils.copy(openStream, writer, "UTF-8");

			JSONObject root = new JSONObject(writer.toString());
			JSONObject jsonObject = root.getJSONObject("DPS").getJSONObject(
					"Buses");
			JSONArray jSONArray = jsonObject.getJSONArray("DpsBus");
			out.write(jSONArray.toString());
		} catch (JSONException e) {
			e.printStackTrace();
		} finally {
			if (out != null) {
				out.close();
			}
		}
	}

	@Override
	protected void doPost(HttpServletRequest req, HttpServletResponse resp)
			throws ServletException, IOException {
		handleRequest(req, resp);
	}

	@Override
	protected void doGet(HttpServletRequest req, HttpServletResponse resp)
			throws ServletException, IOException {
		handleRequest(req, resp);
	}
}