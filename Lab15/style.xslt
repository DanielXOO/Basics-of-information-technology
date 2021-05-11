<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match="/">
        <html>
            <body>
                <table>
                    <tr>
                        <th>Имя</th>
                        <th>Фамилия</th>
                        <th>Оценка</th>
                        <th>Баллы</th>
                        <th>Год</th>
                    </tr>
                    <xsl:for-each select="table/person">
                                <xsl:sort select="year" data-type="number" order="descending" />
                                <tr>
                                    <xsl:choose>
                                        <xsl:when test="mark &gt; 4">
                                            <td bgcolor="green"><xsl:value-of select="name" /></td>
                                            <td bgcolor="green"><xsl:value-of select="surname" /></td>
                                            <td> <xsl:value-of select="mark" /></td>
                                            <td> <xsl:value-of select="score" /></td>
                                            <td><xsl:value-of select="year" /></td>
                                    </xsl:when>
                                    <xsl:otherwise>
                                            <td bgcolor="red"><xsl:value-of select="name" /></td>
                                            <td bgcolor="red"><xsl:value-of select="surname" /></td>
                                            <td> <xsl:value-of select="mark" /></td>
                                            <td> <xsl:value-of select="score" /></td>
                                            <td><xsl:value-of select="year" /></td>
                                    </xsl:otherwise>
                                    </xsl:choose>
                                </tr>
                    </xsl:for-each>
                </table>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>
