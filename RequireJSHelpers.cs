namespace RequireJSandCaching
{
    public static class RequireJSHelpers
    {
        private static readonly bool _inDebug;
        private static readonly string _version;

        static RequireJSHelpers()
        {
            _inDebug = System.Web.HttpContext.Current.IsDebuggingEnabled;
            _version = (_inDebug)
                ? "InDebug"
                : System.Reflection.Assembly.GetExecutingAssembly().GetName().Version.ToString();
        }

        public static string Version
        {
            get
            {
                return (_inDebug)
                    ? System.DateTime.Now.Ticks.ToString()
                    : _version;
            }
        }
    }
}