const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {

𝙰𝚂𝙸𝚃𝙷𝙰-𝙼𝙳=bu5lTLIS#PS_y6t06EefNKhTaw4KM4HIG2JhsUIm5LU42h-I4RiY: process.env.𝙰𝚂𝙸𝚃𝙷𝙰-𝙼𝙳=bu5lTLIS#PS_y6t06EefNKhTaw4KM4HIG2JhsUIm5LU42h-I4RiY === undefined ? '𝙰𝚂𝙸𝚃𝙷𝙰-𝙼𝙳=fnZQhDgK#DND7k_A2tzsDURF4qPhYmwfFNML2rrMF7Sykg9PSUWk' : process.env.𝙰𝚂𝙸𝚃𝙷𝙰-𝙼𝙳=bu5lTLIS#PS_y6t06EefNKhTaw4KM4HIG2JhsUIm5LU42h-I4RiY,
PORT: process.env.PORT === undefined ? "8000" : process.env.PORT,
SESSION_NAME: process.env.PORT === undefined ? "asitha" : process.env.SESSION_NAME,
POSTGRESQL_URL: process.env.POSTGRESQL_URL === undefined ? 'postgresql://postgres:@Asitha2005b@db.waiqbrnuxkjebghzhovz.supabase.co:5432/postgres' : process.env.POSTGRESQL_URL,
};
