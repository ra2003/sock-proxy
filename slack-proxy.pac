function FindProxyForURL(url, host) {
    if (shExpMatch(host, "*.slack-msgs.com") ||
       (shExpMatch(host, "*.slack.com") ||
       (shExpMatch(host, "*.slack-msgs.com") ||
       (shExpMatch(host, "*.slack-files.com") ||
       (shExpMatch(host, "*.slack-imgs.com") ||
       (shExpMatch(host, "*.slack-edge.com") ||
       (shExpMatch(host, "*.slack-core.com") ||
       (shExpMatch(host, "*.slack-redir.net") {
        return "SOCKS 127.0.0.1:8000; DIRECT";
    }
    return "DIRECT";
}
