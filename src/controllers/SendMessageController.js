const { Builder, By, Key, until } = require('selenium-webdriver')

const axios = require('axios')

module.exports = {
    async index(request, response) {
        let driver = await new Builder().forBrowser('chrome').build();
        try {

            axios.get('http://localhost:3333/contact')
                .then(async function (response) {
                    var names = response.data

                    await driver.get('https://web.whatsapp.com/');

                    names.forEach(async element => {
                        setTimeout(async () => {
                            await driver.findElement(By.xpath(`//span[@title="${element.name}"]`)).click();
                        }, 7000);
                        const chat = await driver.findElement(By.className('_1Plpp'))
                        await chat.click()
                        await chat.sendKeys('Olá, sou um bot', Key.RETURN)
                    });
                })
                .catch(function (error) {
                    // handle error
                    return response.status(400).send(error)
                })
                .finally(function () {
                    // always executed
                });

            //await driver.wait(until.titleIs('webdriver - Google Search'), 8000);

        } catch (error) {
            await driver.quit()
        }

    }
}