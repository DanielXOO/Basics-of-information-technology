<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match="/">
        <html>
            <body>
                <table>
                    <tr>
                        <th>Университет</th>
                        <th>Проходной балл</th>
                        <th>Кол-во мест</th>
                        <th>Город</th>
                    </tr>
                    <xsl:for-each select="root/university">
                        <tr>
                            <td><xsl:value-of select="name"/></td>
                            <td><xsl:value-of select="score"/></td>
                            <td><xsl:value-of select="places"/></td>
                            <td><xsl:value-of select="city"/></td>
                        </tr>
                    </xsl:for-each>
                </table>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>
