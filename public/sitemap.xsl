<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="3.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9">
    <xsl:template match="/">
        <html>
            <head>
                <title>Sitemap for potineizner's_Domain</title>
            </head>
            <body>
                <h1>List of URLs for potineizner.com:</h1>
                <ul>
                    <xsl:for-each select="sitemap:urlset/sitemap:url">
                        <li><code><xsl:value-of select="sitemap:loc" /></code>, Last updated on <xsl:value-of select="sitemap:lastmod" />.</li>
                    </xsl:for-each>
                </ul>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>