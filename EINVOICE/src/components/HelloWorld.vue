<template>
  <div style="background-color: lightgray" >
    <div style="background-color: white;margin: auto;width: 29.7cm" id="printable-content">
      <div class="tfoot " id="pageFooter" style="display: none">
        <div class="footerHolder" style="">
          <div class="invoice-footer">
            <div class="" style="border: 1px solid lightgray;border-radius: 8px;padding: 10px 10px 0">
              <div style="display: flex;justify-content: space-between;gap: 30px">
                <div style="width: 50%;border-right: 1px solid lightgray;padding-right: 10px">
                  <h6 class="font-size-12">Köpare</h6>
                  <div style="display: flex;justify-content: space-between;gap: 20px">
                    <div style="width: 50%;">
                      <label for="">Datum</label>
                    </div>
                    <div style="width: 50%;">
                      <label for="">Ort</label>
                    </div>
                  </div>
                  <div class="pb-2">
                    <label for="">Signatur</label>
                  </div>
                </div>
                <div style="width: 50%">
                  <h6 class="font-size-12">Säljare</h6>
                  <div style="display: flex;justify-content: space-between;gap: 20px">
                    <div style="width: 50%;">
                      <label for="">Datum</label>
                    </div>
                    <div style="width: 50%;">
                      <label for="">Ort</label>
                    </div>
                  </div>
                  <div class="pb-2">
                    <label for="">Signatur</label>
                  </div>
                </div>
              </div>
            </div>
            <small style="font-size: 8px"> Köparen har tagit del av och godkänt Testbolaget Bil ABs
              integritetspolicy</small>
            <div class="mt-2"
                 style=" display: flex; justify-content: space-between; border-top: 1px solid lightgray;  padding: 10px;">
              <div>
                <h6 class="font-size-12">Husverket</h6>
                <div class="font-size-10">
                  <div>Munkforsplan 37</div>
                  <div> xxxxxx</div>
                  <div> xxxx</div>
                  <div>xxxxxx</div>
                </div>
              </div>
              <div>
                <h6 class="font-size-12">Kontaktuppgifter</h6>
                <div class="d-flex gap-1 font-size-10">
                  <div>
                    <div>Telefon:</div>
                    <div>E-post</div>
                    <div>Hemsidan:</div>
                    <div>Adress:</div>
                  </div>
                  <div>
                    <div>070 313 33 13</div>
                    <div>amjad@husverket.se</div>
                    <div>www.husverket.se</div>
                    <div>xxxxxxx</div>
                  </div>
                </div>
              </div>
              <div>
                <h6 class="font-size-12">Betalningsuppgifter</h6>
                <div class="d-flex gap-1 font-size-10">
                  <div>
                    <div>Bank:</div>
                    <div>Bankkonto</div>
                    <div>Bankgiro:</div>
                    <div>Plusgiro:</div>
                    <div>Swish:</div>
                  </div>
                  <div>
                    <div>SEB</div>
                    <div>2311 321231233122</div>
                    <div>321-31111</div>
                    <div>321-31111</div>
                    <div>S070 414 3308</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- Display the page number -->
        <div class="page-number"></div>
      </div>
      <table >
        <thead>
        <tr>
          <td>
            <div class="invoice-header d-flex align-baseline justify-content-between">
              <div class="d-flex align-baseline justify-content-between flex-column">
                <div>
                  <h2 style="  font-weight: 500; color: #191919;font-size: 32px">Köpavtal</h2>
                  <div>No:12312312312312</div>
                  <div>Invoice date: 12312312312312</div>
                  <div>Strömgatan 35, 745 63, Enköping</div>
                </div>

              </div>
              <div class="d-flex align-baseline  flex-column">
                <div>
                  <svg width="129" height="28" viewBox="0 0 129 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M14.4746 7.76271V2.38016C14.4746 1.90809 14.8586 1.52235 15.3296 1.55423C21.8204 1.99355 26.9493 7.39783 26.9493 14C26.9493 20.8896 21.3642 26.4747 14.4746 26.4747C7.58509 26.4747 2 20.8896 2 14C2 8.48757 5.57552 3.81021 10.5339 2.16062M14.4746 7.76271L19.3834 11.3119C19.6057 11.4726 19.7374 11.7303 19.7374 12.0046V18.1199C19.7374 18.5919 19.3547 18.9746 18.8826 18.9746H14.4746M14.4746 7.76271L9.56585 11.3119C9.34355 11.4726 9.2119 11.7303 9.2119 12.0046V18.1199C9.2119 18.5919 9.5946 18.9746 10.0667 18.9746H14.4746M14.4746 18.9746V15.8165"
                        stroke="#F7D046" stroke-width="2.56432" stroke-linecap="round"></path>
                    <path
                        d="M36.4858 20.4759C36.3509 20.4759 36.2362 20.4354 36.1417 20.3544C36.0472 20.26 36 20.1385 36 19.9901V6.81201C36 6.66357 36.0472 6.54211 36.1417 6.44764C36.2362 6.35318 36.3509 6.30594 36.4858 6.30594H38.3279C38.4764 6.30594 38.5911 6.35318 38.672 6.44764C38.7665 6.54211 38.8137 6.66357 38.8137 6.81201V12.0346H44.7854V6.81201C44.7854 6.66357 44.8326 6.54211 44.9271 6.44764C45.0215 6.35318 45.1362 6.30594 45.2712 6.30594H47.093C47.2415 6.30594 47.3629 6.35318 47.4574 6.44764C47.5519 6.54211 47.5991 6.66357 47.5991 6.81201V19.9901C47.5991 20.125 47.5519 20.2397 47.4574 20.3342C47.3629 20.4286 47.2415 20.4759 47.093 20.4759H45.2712C45.1362 20.4759 45.0215 20.4286 44.9271 20.3342C44.8326 20.2397 44.7854 20.125 44.7854 19.9901V14.565H38.8137V19.9901C38.8137 20.125 38.7665 20.2397 38.672 20.3342C38.5911 20.4286 38.4764 20.4759 38.3279 20.4759H36.4858Z"
                        fill="black"></path>
                    <path
                        d="M53.7224 20.6783C52.8992 20.6783 52.1839 20.4961 51.5766 20.1318C50.9829 19.7539 50.524 19.2276 50.2001 18.5528C49.8763 17.8646 49.7143 17.0549 49.7143 16.1237V10.4355C49.7143 10.3005 49.7615 10.1858 49.856 10.0913C49.9505 9.99687 50.0652 9.94964 50.2001 9.94964H51.9815C52.13 9.94964 52.2447 9.99687 52.3256 10.0913C52.4201 10.1858 52.4673 10.3005 52.4673 10.4355V16.0022C52.4673 17.6756 53.2028 18.5123 54.6738 18.5123C55.3755 18.5123 55.9288 18.2897 56.3337 17.8443C56.752 17.399 56.9612 16.7849 56.9612 16.0022V10.4355C56.9612 10.3005 57.0085 10.1858 57.1029 10.0913C57.1974 9.99687 57.3121 9.94964 57.4471 9.94964H59.2284C59.3634 9.94964 59.4781 9.99687 59.5725 10.0913C59.667 10.1858 59.7142 10.3005 59.7142 10.4355V19.9901C59.7142 20.125 59.667 20.2397 59.5725 20.3342C59.4781 20.4286 59.3634 20.4759 59.2284 20.4759H57.5887C57.4403 20.4759 57.3188 20.4286 57.2244 20.3342C57.1434 20.2397 57.1029 20.125 57.1029 19.9901V19.1601C56.7386 19.6324 56.2865 20.0035 55.7467 20.2735C55.2069 20.5434 54.5321 20.6783 53.7224 20.6783Z"
                        fill="black"></path>
                    <path
                        d="M65.6675 20.6783C64.8578 20.6783 64.1628 20.5838 63.5825 20.3949C63.0157 20.206 62.5501 19.9698 62.1858 19.6864C61.8214 19.403 61.5515 19.1196 61.376 18.8362C61.2006 18.5528 61.1061 18.3167 61.0926 18.1277C61.0791 17.9793 61.1196 17.8646 61.2141 17.7836C61.3221 17.6891 61.4368 17.6419 61.5582 17.6419H63.1574C63.2114 17.6419 63.2586 17.6486 63.2991 17.6621C63.3396 17.6756 63.3936 17.7161 63.461 17.7836C63.6365 17.932 63.8187 18.0872 64.0076 18.2492C64.21 18.4111 64.4462 18.5528 64.7161 18.6743C64.986 18.7822 65.3234 18.8362 65.7282 18.8362C66.2545 18.8362 66.6931 18.735 67.044 18.5326C67.4084 18.3166 67.5906 18.013 67.5906 17.6216C67.5906 17.3383 67.5096 17.1088 67.3477 16.9334C67.1992 16.758 66.9158 16.6028 66.4975 16.4678C66.0791 16.3194 65.4853 16.1642 64.7161 16.0022C63.9604 15.8268 63.3328 15.6041 62.8335 15.3342C62.3342 15.0643 61.9631 14.7269 61.7202 14.3221C61.4773 13.9172 61.3558 13.4449 61.3558 12.9051C61.3558 12.3788 61.511 11.8795 61.8214 11.4071C62.1453 10.9213 62.6176 10.5232 63.2384 10.2128C63.8727 9.90241 64.6554 9.74721 65.5865 9.74721C66.3153 9.74721 66.9496 9.84168 67.4894 10.0306C68.0292 10.206 68.4745 10.4287 68.8254 10.6986C69.1897 10.9685 69.4664 11.2452 69.6553 11.5286C69.8443 11.7985 69.9455 12.0346 69.959 12.2371C69.9725 12.3855 69.932 12.507 69.8375 12.6014C69.743 12.6824 69.6351 12.7229 69.5136 12.7229H68.0157C67.9482 12.7229 67.8875 12.7094 67.8335 12.6824C67.7795 12.6554 67.7255 12.6217 67.6715 12.5812C67.5231 12.4462 67.3612 12.3045 67.1857 12.1561C67.0103 12.0077 66.7944 11.8795 66.5379 11.7715C66.295 11.65 65.9712 11.5893 65.5663 11.5893C65.0535 11.5893 64.6621 11.704 64.3922 11.9334C64.1223 12.1494 63.9874 12.426 63.9874 12.7634C63.9874 12.9928 64.0481 13.1952 64.1695 13.3707C64.3045 13.5326 64.5677 13.6878 64.959 13.8363C65.3504 13.9847 65.9442 14.1399 66.7404 14.3018C67.6446 14.4638 68.3598 14.7067 68.8861 15.0306C69.4259 15.341 69.8038 15.7053 70.0197 16.1237C70.2491 16.5285 70.3638 16.9806 70.3638 17.4799C70.3638 18.0872 70.1816 18.6338 69.8173 19.1196C69.4664 19.6054 68.9401 19.9901 68.2383 20.2735C67.5501 20.5434 66.6931 20.6783 65.6675 20.6783Z"
                        fill="black"></path>
                    <path
                        d="M75.094 20.4759C74.8781 20.4759 74.7161 20.4286 74.6082 20.3342C74.5137 20.2262 74.4327 20.1048 74.3653 19.9698L70.5799 10.5772C70.5529 10.5097 70.5394 10.449 70.5394 10.395C70.5394 10.2735 70.5799 10.1723 70.6608 10.0913C70.7553 9.99687 70.8633 9.94964 70.9847 9.94964H72.6244C72.7863 9.94964 72.9078 9.99687 72.9887 10.0913C73.0697 10.1723 73.1237 10.2533 73.1507 10.3343L75.843 17.4395L78.5353 10.3343C78.5623 10.2533 78.6162 10.1723 78.6972 10.0913C78.7782 9.99687 78.8996 9.94964 79.0616 9.94964H80.7215C80.8294 9.94964 80.9239 9.99687 81.0049 10.0913C81.0993 10.1723 81.1466 10.2735 81.1466 10.395C81.1466 10.449 81.1398 10.5097 81.1263 10.5772L77.3207 19.9698C77.2667 20.1048 77.1857 20.2262 77.0778 20.3342C76.9698 20.4286 76.8079 20.4759 76.592 20.4759H75.094Z"
                        fill="black"></path>
                    <path
                        d="M86.4434 20.6783C84.9454 20.6783 83.7578 20.2465 82.8807 19.3828C82.0035 18.5191 81.5311 17.291 81.4637 15.6986C81.4502 15.5636 81.4434 15.3949 81.4434 15.1925C81.4434 14.9766 81.4502 14.8079 81.4637 14.6864C81.5177 13.6743 81.7471 12.7971 82.1519 12.0549C82.5703 11.3127 83.1438 10.7459 83.8726 10.3545C84.6013 9.94964 85.4582 9.74721 86.4434 9.74721C87.5365 9.74721 88.4542 9.97663 89.1964 10.4355C89.9386 10.8808 90.4987 11.5083 90.8765 12.318C91.2544 13.1143 91.4434 14.0387 91.4434 15.0913V15.5164C91.4434 15.6514 91.3961 15.7661 91.3017 15.8605C91.2072 15.955 91.0857 16.0022 90.9373 16.0022H84.2167C84.2167 16.0022 84.2167 16.0225 84.2167 16.063C84.2167 16.1034 84.2167 16.1372 84.2167 16.1642C84.2302 16.6365 84.3179 17.0751 84.4798 17.4799C84.6553 17.8713 84.9049 18.1884 85.2288 18.4314C85.5662 18.6743 85.9643 18.7957 86.4231 18.7957C86.801 18.7957 87.1181 18.7417 87.3746 18.6338C87.631 18.5123 87.8401 18.3774 88.0021 18.2289C88.164 18.0805 88.2787 17.959 88.3462 17.8646C88.4677 17.7026 88.5621 17.6082 88.6296 17.5812C88.7106 17.5407 88.8253 17.5204 88.9737 17.5204H90.7146C90.8496 17.5204 90.9575 17.5609 91.0385 17.6419C91.133 17.7229 91.1734 17.8241 91.16 17.9455C91.1465 18.1615 91.0317 18.4246 90.8158 18.735C90.6134 19.0454 90.3165 19.349 89.9251 19.6459C89.5338 19.9428 89.0412 20.1925 88.4474 20.3949C87.8671 20.5838 87.1991 20.6783 86.4434 20.6783ZM84.2167 14.3018H88.6903V14.2411C88.6903 13.7148 88.6026 13.256 88.4272 12.8646C88.2517 12.4732 87.9953 12.1628 87.658 11.9334C87.3206 11.704 86.9157 11.5893 86.4434 11.5893C85.9711 11.5893 85.5662 11.704 85.2288 11.9334C84.8914 12.1628 84.635 12.4732 84.4596 12.8646C84.2977 13.256 84.2167 13.7148 84.2167 14.2411V14.3018Z"
                        fill="black"></path>
                    <path
                        d="M93.3694 20.4759C93.2345 20.4759 93.1198 20.4286 93.0253 20.3342C92.9308 20.2397 92.8836 20.125 92.8836 19.9901V10.4557C92.8836 10.3073 92.9308 10.1858 93.0253 10.0913C93.1198 9.99687 93.2345 9.94964 93.3694 9.94964H95.0091C95.144 9.94964 95.2587 9.99687 95.3532 10.0913C95.4612 10.1858 95.5152 10.3073 95.5152 10.4557V11.2857C95.8255 10.8538 96.2236 10.5232 96.7095 10.2938C97.2088 10.0643 97.7823 9.94964 98.4301 9.94964H99.2601C99.4085 9.94964 99.5232 9.99687 99.6042 10.0913C99.6987 10.1858 99.7459 10.3005 99.7459 10.4355V11.8929C99.7459 12.0279 99.6987 12.1426 99.6042 12.2371C99.5232 12.3315 99.4085 12.3788 99.2601 12.3788H97.6811C97.0334 12.3788 96.5273 12.561 96.1629 12.9253C95.812 13.2897 95.6366 13.789 95.6366 14.4233V19.9901C95.6366 20.125 95.5894 20.2397 95.4949 20.3342C95.4004 20.4286 95.279 20.4759 95.1305 20.4759H93.3694Z"
                        fill="black"></path>
                    <path
                        d="M101.122 20.4759C100.987 20.4759 100.873 20.4286 100.778 20.3342C100.684 20.2397 100.636 20.125 100.636 19.9901V6.58934C100.636 6.45439 100.684 6.33968 100.778 6.24522C100.873 6.15075 100.987 6.10352 101.122 6.10352H102.762C102.91 6.10352 103.025 6.15075 103.106 6.24522C103.2 6.33968 103.248 6.45439 103.248 6.58934V13.5124L106.649 10.2938C106.77 10.1858 106.878 10.1048 106.972 10.0509C107.067 9.98338 107.209 9.94964 107.397 9.94964H109.28C109.415 9.94964 109.523 9.99013 109.604 10.0711C109.685 10.1521 109.725 10.26 109.725 10.395C109.725 10.449 109.712 10.5097 109.685 10.5772C109.658 10.6446 109.604 10.7054 109.523 10.7594L105.353 14.6662L110.029 19.6864C110.164 19.8214 110.231 19.9361 110.231 20.0305C110.231 20.1655 110.184 20.2735 110.09 20.3544C110.009 20.4354 109.908 20.4759 109.786 20.4759H107.863C107.661 20.4759 107.512 20.4489 107.418 20.3949C107.337 20.3274 107.236 20.2397 107.114 20.1318L103.248 16.063V19.9901C103.248 20.125 103.2 20.2397 103.106 20.3342C103.025 20.4286 102.91 20.4759 102.762 20.4759H101.122Z"
                        fill="black"></path>
                    <path
                        d="M115.077 20.6783C113.579 20.6783 112.392 20.2465 111.515 19.3828C110.637 18.5191 110.165 17.291 110.098 15.6986C110.084 15.5636 110.077 15.3949 110.077 15.1925C110.077 14.9766 110.084 14.8079 110.098 14.6864C110.152 13.6743 110.381 12.7971 110.786 12.0549C111.204 11.3127 111.778 10.7459 112.507 10.3545C113.235 9.94964 114.092 9.74721 115.077 9.74721C116.171 9.74721 117.088 9.97663 117.83 10.4355C118.573 10.8808 119.133 11.5083 119.511 12.318C119.888 13.1143 120.077 14.0387 120.077 15.0913V15.5164C120.077 15.6514 120.03 15.7661 119.936 15.8605C119.841 15.955 119.72 16.0022 119.571 16.0022H112.851C112.851 16.0022 112.851 16.0225 112.851 16.063C112.851 16.1034 112.851 16.1372 112.851 16.1642C112.864 16.6365 112.952 17.0751 113.114 17.4799C113.289 17.8713 113.539 18.1884 113.863 18.4314C114.2 18.6743 114.598 18.7957 115.057 18.7957C115.435 18.7957 115.752 18.7417 116.009 18.6338C116.265 18.5123 116.474 18.3774 116.636 18.2289C116.798 18.0805 116.913 17.959 116.98 17.8646C117.102 17.7026 117.196 17.6082 117.264 17.5812C117.345 17.5407 117.459 17.5204 117.608 17.5204H119.349C119.484 17.5204 119.592 17.5609 119.673 17.6419C119.767 17.7229 119.807 17.8241 119.794 17.9455C119.78 18.1615 119.666 18.4246 119.45 18.735C119.247 19.0454 118.951 19.349 118.559 19.6459C118.168 19.9428 117.675 20.1925 117.081 20.3949C116.501 20.5838 115.833 20.6783 115.077 20.6783ZM112.851 14.3018H117.324V14.2411C117.324 13.7148 117.237 13.256 117.061 12.8646C116.886 12.4732 116.629 12.1628 116.292 11.9334C115.955 11.704 115.55 11.5893 115.077 11.5893C114.605 11.5893 114.2 11.704 113.863 11.9334C113.525 12.1628 113.269 12.4732 113.094 12.8646C112.932 13.256 112.851 13.7148 112.851 14.2411V14.3018Z"
                        fill="black"></path>
                    <path
                        d="M126.235 20.4759C125.425 20.4759 124.744 20.3342 124.191 20.0508C123.637 19.7674 123.226 19.349 122.956 18.7957C122.686 18.2289 122.551 17.5272 122.551 16.6905V12.0954H120.952C120.817 12.0954 120.702 12.0481 120.608 11.9537C120.513 11.8592 120.466 11.7445 120.466 11.6095V10.4355C120.466 10.3005 120.513 10.1858 120.608 10.0913C120.702 9.99687 120.817 9.94964 120.952 9.94964H122.551V6.58934C122.551 6.45439 122.591 6.33968 122.672 6.24522C122.767 6.15075 122.888 6.10352 123.037 6.10352H124.676C124.811 6.10352 124.926 6.15075 125.021 6.24522C125.115 6.33968 125.162 6.45439 125.162 6.58934V9.94964H127.693C127.828 9.94964 127.942 9.99687 128.037 10.0913C128.131 10.1858 128.178 10.3005 128.178 10.4355V11.6095C128.178 11.7445 128.131 11.8592 128.037 11.9537C127.942 12.0481 127.828 12.0954 127.693 12.0954H125.162V16.4881C125.162 17.0414 125.257 17.4732 125.446 17.7836C125.648 18.094 125.992 18.2492 126.478 18.2492H127.875C128.01 18.2492 128.124 18.2964 128.219 18.3909C128.313 18.4853 128.361 18.6 128.361 18.735V19.9901C128.361 20.125 128.313 20.2397 128.219 20.3342C128.124 20.4286 128.01 20.4759 127.875 20.4759H126.235Z"
                        fill="black"></path>
                  </svg>
                </div>
                <div class="mt-2">
                  <h5>Kunduppgifter</h5>
                  <div>xxxxx</div>
                  <div>xxxxx</div>
                  <div>xxxxxxx</div>
                  <div>xxxxxxx</div>
                </div>

              </div>

            </div>
            <div class="page-header-space"></div>
          </td>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>
            <div class="invoice-body mt-1">
              <div style="" class="mb-3">
                <h5>text</h5>
                <div style="border: 1px solid lightgray; border-radius: 8px; display: flex; flex-direction: column;">
                  <div
                      style="    display: flex; justify-content: space-between; border-bottom: 1px solid lightgray;  padding: 10px;">
                    <div>
                      <label for="">text</label>
                      <div>text</div>
                    </div>
                    <div>
                      <label for="">text</label>
                      <div>text-text -text</div>
                    </div>
                    <div>
                      <label for="">text</label>
                      <div>text</div>
                    </div>
                    <div>
                      <label for="">text</label>
                      <div>text</div>
                    </div>
                    <div>
                      <label for="">text</label>
                      <div>text</div>
                    </div>
                  </div>
                  <div style="    display: flex; justify-content: space-between;  padding: 10px;">
                    <div>
                      <label for="">text</label>
                      <div>text</div>
                    </div>
                    <div>
                      <label for="">text</label>
                      <div>654564</div>
                    </div>
                    <div>
                      <label for="">text</label>
                      <div>text</div>
                    </div>
                    <div>
                      <label for="">text</label>
                      <div>text</div>
                    </div>
                    <div>
                      <label for="">Garanti</label>
                      <div>text</div>
                    </div>
                    <div>
                      <label for="">Momsredovisning</label>
                      <div>text</div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="invoiceTableHolder">
                <table class="invoice-table table">
                  <thead>
                  <tr>
                    <th>Item</th>
                    <th>Qty</th>
                    <th>Pris ex.</th>
                    <th>Moms</th>
                    <th>Pris ink.</th>
                    <th>Totalt</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr v-for="(item,index) in items" :key="item.id">
                    <td>{{ item.name }} {{ index }}</td>
                    <td>{{ item.quantity }}</td>
                    <td>{{ item.price }} sek</td>
                    <td>{{ item.vat }} sek</td>
                    <td>{{ item.price_in }} sek</td>
                    <td>{{ item.totalt }} sek</td>
                  </tr>
                  <tr v-for="(item,index) in items" :key="item.id">
                    <td>{{ item.name }} {{ index }}</td>
                    <td>{{ item.quantity }}</td>
                    <td>{{ item.price }} sek</td>
                    <td>{{ item.vat }} sek</td>
                    <td>{{ item.price_in }} sek</td>
                    <td>{{ item.totalt }} sek</td>
                  </tr>
                  <tr v-for="(item,index) in items" :key="item.id">
                    <td>{{ item.name }} {{ index }}</td>
                    <td>{{ item.quantity }}</td>
                    <td>{{ item.price }} sek</td>
                    <td>{{ item.vat }} sek</td>
                    <td>{{ item.price_in }} sek</td>
                    <td>{{ item.totalt }} sek</td>
                  </tr>
                  <tr v-for="(item,index) in items" :key="item.id">
                    <td>{{ item.name }} {{ index }}</td>
                    <td>{{ item.quantity }}</td>
                    <td>{{ item.price }} sek</td>
                    <td>{{ item.vat }} sek</td>
                    <td>{{ item.price_in }} sek</td>
                    <td>{{ item.totalt }} sek</td>
                  </tr>
                  <tr v-for="(item,index) in items" :key="item.id">
                    <td>{{ item.name }} {{ index }}</td>
                    <td>{{ item.quantity }}</td>
                    <td>{{ item.price }} sek</td>
                    <td>{{ item.vat }} sek</td>
                    <td>{{ item.price_in }} sek</td>
                    <td>{{ item.totalt }} sek</td>
                  </tr>
                  <tr v-for="(item,index) in items" :key="item.id">
                    <td>{{ item.name }} {{ index }}</td>
                    <td>{{ item.quantity }}</td>
                    <td>{{ item.price }} sek</td>
                    <td>{{ item.vat }} sek</td>
                    <td>{{ item.price_in }} sek</td>
                    <td>{{ item.totalt }} sek</td>
                  </tr>

                  </tbody>
                </table>
              </div>
              <div class="mt-2 rejectBreak" style="border: 1px solid lightgray;border-radius: 8px;padding: 10px">
                <div class="finansHolder d-flex">
                  <div>
                    <label for="">xxx</label>
                    <div>xxx</div>
                  </div>
                  <div>
                    <label for="">xxx</label>
                    <div>xxx</div>
                  </div>
                  <div>
                    <label for="">xxx</label>
                    <div>xxx %</div>
                  </div>
                  <div>
                    <label for="">xxx</label>
                    <div>xxx</div>
                  </div>
                  <div>
                    <label for="">xxx</label>
                    <div>xxx</div>
                  </div>
                  <div>
                    <label for="">xxx</label>
                    <div>xxx</div>
                  </div>
                  <div>
                    <label for="">xxx</label>
                    <div>xxx</div>
                  </div>
                  <div>
                    <label for="">xxx</label>
                    <div>xxx %</div>
                  </div>
                  <div>
                    <label for="">xxx</label>
                    <div>xxx</div>
                  </div>
                  <div>
                    <label for="">xxx</label>
                    <div>xxxr</div>
                  </div>
                  <div>
                    <label for="">xxx</label>
                    <div>xxx</div>
                  </div>
                  <div>
                    <label for="">xxx</label>
                    <div>xxx</div>
                  </div>
                  <div>
                    <label for="">xxx</label>
                    <div>xxx</div>
                  </div>
                  <div>
                    <label for="">xxx</label>
                    <div>xxx</div>
                  </div>
                </div>
              </div>
              <div class="mt-2 mb-3 rejectBreak" style="border: 1px solid lightgray;border-radius: 8px;padding: 10px">
                <h6 class="font-size-12">Notering</h6>
                <div style="min-height: 10px">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean
                  massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                </div>
              </div>
            </div>
          </td>
        </tr>
        </tbody>
        <tfoot>
        <tr>
          <td>
            <div class="tfootHolder">
              <div class="footerHolder" style="">
                <div class="invoice-footer">
                  <div class="" style="border: 1px solid lightgray;border-radius: 8px;padding: 10px 10px 0">
                    <div style="display: flex;justify-content: space-between;gap: 30px">
                      <div style="width: 50%;border-right: 1px solid lightgray;padding-right: 10px">
                        <h6 class="font-size-12">Köpare11</h6>
                        <div style="display: flex;justify-content: space-between;gap: 20px">
                          <div style="width: 50%;">
                            <label for="">Datum</label>
                          </div>
                          <div style="width: 50%;">
                            <label for="">Ort</label>
                          </div>
                        </div>
                        <div class="pb-2">
                          <label for="">Signatur</label>
                        </div>
                      </div>
                      <div style="width: 50%">
                        <h6 class="font-size-12">Säljare</h6>
                        <div style="display: flex;justify-content: space-between;gap: 20px">
                          <div style="width: 50%;">
                            <label for="">Datum</label>
                          </div>
                          <div style="width: 50%;">
                            <label for="">Ort</label>
                          </div>
                        </div>
                        <div class="pb-2">
                          <label for="">Signatur</label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <small style="font-size: 8px"> Köparen har tagit del av och godkänt Testbolaget Bil ABs
                    integritetspolicy</small>
                  <div class="mt-2"
                       style=" display: flex; justify-content: space-between; border-top: 1px solid lightgray;  padding: 10px;">
                    <div>
                      <h6 class="font-size-12">Husverket</h6>
                      <div class="font-size-10">
                        <div>Munkforsplan 37</div>
                        <div> xxxxxx</div>
                        <div> xxxx</div>
                        <div>xxxxxx</div>
                      </div>
                    </div>
                    <div>
                      <h6 class="font-size-12">Kontaktuppgifter</h6>
                      <div class="d-flex gap-1 font-size-10">
                        <div>
                          <div>Telefon:</div>
                          <div>E-post</div>
                          <div>Hemsidan:</div>
                          <div>Adress:</div>
                        </div>
                        <div>
                          <div>070 313 33 13</div>
                          <div>amjad@husverket.se</div>
                          <div>www.husverket.se</div>
                          <div>xxxxxxx</div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h6 class="font-size-12">Betalningsuppgifter</h6>
                      <div class="d-flex gap-1 font-size-10">
                        <div>
                          <div>Bank:</div>
                          <div>Bankkonto</div>
                          <div>Bankgiro:</div>
                          <div>Plusgiro:</div>
                          <div>Swish:</div>
                        </div>
                        <div>
                          <div>SEB</div>
                          <div>2311 321231233122</div>
                          <div>321-31111</div>
                          <div>321-31111</div>
                          <div>S070 414 3308</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
              <div class="page-footer-space"></div>
            </div>
            <div class="page-footer-space"></div>
          </td>
        </tr>
        </tfoot>
      </table>
    </div>
    

  </div>

  <div class="invoice">
    <!-- Your invoice content here -->

    <!-- Page number -->
    <span class="page-number"> <span class="page-counter"></span></span>
  </div>


</template>
<script>


export default {
  data() {
    return {
      pageNumber: 1, // Initialize the page number
      items: [
        {name: "Item 1", quantity: 2, price: 10, vat: 20, price_in: 1200, totalt: 2000},
        {name: "Item 2 with a long name that needs to be truncated", quantity: 1, price: 20},
        {name: "Item 3", quantity: 3, price: 15},
        {name: "Item 1", quantity: 2, price: 10},
        {name: "Item 2 with a long name that needs to be truncated", quantity: 1, price: 20},
        {name: "Item 3", quantity: 3, price: 15},
        {name: "Item 3", quantity: 3, price: 15},

      ]
    };

    
  },
 

  
  methods: {
  limitNameLength(name) {
    const maxLength = 20;
    return name.length > maxLength ? name.substring(0, maxLength) + '...' : name;
  },
  updatePageCounter(totalPages) {
    const currentPage = this.pageNumber; // Use the component's data property
    this.$nextTick(() => {
      const pageCounterElement = document.querySelector('.page-counter');
      if (pageCounterElement) {
        document.querySelector('.page-counter').textContent = currentPage;
        pageCounterElement.textContent = `Page ${currentPage} of ${totalPages}`;
      }
    });
  },
},

mounted() {
    const totalPages = 20;
    this.updatePageCounter(totalPages);
  },


};







// export default {
//   data() {
//     return {
//       pageNumber: 1, // Initialize the page number
//       itemsPerPage: 3, // Define how many items per page
//       items: [
//         { name: "Item 1", quantity: 2, price: 10, vat: 20, price_in: 1200, totalt: 2000 },
//         { name: "Item 2 with a long name that needs to be truncated", quantity: 1, price: 20 },
//         { name: "Item 3", quantity: 3, price: 15 },
//         { name: "Item 1", quantity: 2, price: 10 },
//         { name: "Item 2 with a long name that needs to be truncated", quantity: 1, price: 20 },
//         { name: "Item 3", quantity: 3, price: 15 },
//         { name: "Item 3", quantity: 3, price: 15 },
//       ]
//     };
//   },
//   computed: {
//     totalPages() {
//       return Math.ceil(this.items.length / this.itemsPerPage);
//     },
//     pages() {
//       let pages = [];
//       for (let i = 0; i < this.items.length; i += this.itemsPerPage) {
//         pages.push({ items: this.items.slice(i, i + this.itemsPerPage) });
//       }
//       return pages;
//     },
//   },
//   methods: {
//     limitNameLength(name) {
//       const maxLength = 20; // Define maximum length for item name
//       return name.length > maxLength ? name.substring(0, maxLength) + '...' : name;
//     },
//     goToPage(pageNumber) {
//       // Update the current page number
//       this.pageNumber = pageNumber;
//     }
//   }
// };


</script>

<style lang="scss">
thead td, tfoot td {
  padding: 20px;
}

tbody tr td {
  padding: 5px 20px;
}


.rejectBreak {
  page-break-after: always;
}


@media print {
  .page-footer {
    position: fixed;
    bottom: 0;
    right: 0;
    left: 0;
    padding: 10px;
    background-color: white;
    border-top: 1px solid lightgray;
    text-align: right;
  thead {
    display: table-header-group;
  }
  }

  tfoot {
    display: table-footer-group;
  }

  button {
    display: none;
  }

  body {
    margin: 0;
  }

  tfoot .tfootHolder {
    display: none;
  }
  .tfoot {
    display: block !important;
    padding: 20px;
    position: fixed;
    bottom: 0;
    width: 29.7cm;

  }
  .page-footer-space {
    height: 300px;
  }

  @page {
    size: A4;
  }


  .page {
    page-break-after: always;
    position: relative;
    height: 95vh; /* Adjust based on your content and page size */
    padding: 20px;
  }
  .page:last-child {
    page-break-after: avoid;
  }
  .page-number {
    position:fixed;
    bottom: 10px;
    right: 50px;
    font-size: 12px;
  }

  .page-counter::before {
  content: counter(); 
}


  
}





</style>